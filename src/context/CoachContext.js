import { createContext, useContext, useState, useEffect } from 'react';
import { Auth, DataStore, Hub } from 'aws-amplify';
import { Coach, PositionCoach, AccreditationCoach, AgeCoach, SpecialityCoach, Availability } from '../models';

const CoachContext = createContext({});

const CoachContextProvider = ({ children }) => {

    const [createdCoach, setCreatedCoach] = useState(null);
    const [createdCoachPosition, setCreatedCoachPosition] = useState(null);
    const [createdCoachAccreditation, setCreatedCoachAccreditation] = useState(null);
    const [createdCoachAge, setCreatedCoachAge] = useState(null);
    const [createdCoachSpeciality, setCreatedCoachSpeciality] = useState(null);
    const [createdCoachAvailability, setCreatedCoachAvailability] = useState([]);

    const [coachAuthUser, setCoachAuthUser] = useState(null);
    const [coachDBUser, setCoachDBUser] = useState(null);
    const sub = coachAuthUser?.attributes?.sub;
    const [coachDBPosition, setCoachDBPosition] = useState(null);
    const [coachDBAge, setCoachDBAge] = useState(null);
    const [coachDBAccreditation, setCoachDBAccreditation] = useState(null);
    const [coachDBSpecialty, setCoachDBSpecialty] = useState(null);
    const [coachDBAvailability, setCoachDBAvailability] = useState([]);

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setCoachAuthUser);
    }, []);

    const getCoachDbUser = () => {
        DataStore.query(Coach, (coach) => coach.sub.eq(sub)).then((coaches) =>
        setCoachDBUser(coaches[0]));
    };

    useEffect(() => {
        if (!sub) {
            return;
        }
        
        const removeListener = Hub.listen('datastore', async ({ payload }) => {
            if (payload.event === 'syncQueriesReady') {
                getCoachDbUser();
            }
        });

        DataStore.start();

        return () => removeListener();
    }, [sub]);

    const getCoachDBPosition = () => {
        DataStore.query(PositionCoach, (position) => position.coachID.eq(coachDBUser.id)).then((positions) =>
        setCoachDBPosition(positions[0]));
    };

    useEffect(() => {
        if (!coachDBUser){
            return;
        }
        getCoachDBPosition();
    },[coachDBUser]);

    const getCoachDBAge = () => {
        DataStore.query(AgeCoach, (age) => age.coachID.eq(coachDBUser.id)).then((ages) =>
        setCoachDBAge(ages[0]));
    };

    useEffect(() => {
        if (!coachDBUser){
            return;
        }
        getCoachDBAge();
    },[coachDBUser]);

    const getCoachDBAccreditation = () => {
        DataStore.query(AccreditationCoach, (accreditation) => accreditation.coachID.eq(coachDBUser.id)).then((accreditations) =>
        setCoachDBAccreditation(accreditations[0]));
    };

    useEffect(() => {
        if (!coachDBUser){
            return;
        }
        getCoachDBAccreditation();
    },[coachDBUser]);

    const getCoachDBSpecialty = () => {
        DataStore.query(SpecialityCoach, (speciality) => speciality.coachID.eq(coachDBUser.id)).then((specialties) =>
        setCoachDBSpecialty(specialties[0]));
    };

    useEffect(() => {
        if (!coachDBUser){
            return;
        }
        getCoachDBSpecialty();
    },[coachDBUser]);

    const getCoachDBAvailability = () => {
        DataStore.query(Availability, (availability) => availability.coachID.eq(coachDBUser.id)).then(setCoachDBAvailability);
    };

    useEffect(() => {
        if (!coachDBUser){
            return;
        }
        getCoachDBAvailability();
    },[coachDBUser]);

    const createCoach = async (coach, position, accreditation, age, speciality, availability) => {
        const newCoach = await DataStore.save(new Coach({
            highlights: coach.highlights,
            sessionPlan: coach.sessionplan,
            background: coach.athleticbackground,
            yearsCoaching: coach.coachexperience,
            yearsPlaying: coach.experience,
            college: coach.college,
            fullName: coach.name,
            streetAddress: coach.address,
            city: coach.city,
            state: coach.state,
            zip: coach.zip,
            email: coach.email,
            shortDesc: coach.description,
            phoneNbr: coach.phoneInput,
            dob: coach.date,
            image: coach.image,
            sportID: coach.sport,
            startPrice: 100.0,
            sub: sub,
        }));
        setCreatedCoach(newCoach);
        createCoachPosition(position, newCoach.id);
        createCoachAccreditation(accreditation, newCoach.id);
        createCoachAge(age, newCoach.id);
        createCoachSpeciality(speciality, newCoach.id);
        createCoachAvailability(availability, newCoach.id);
    };

    const createCoachPosition = async (position, coachID) => {
        const newCoachPosition = await DataStore.save(new PositionCoach({
            coachID: coachID,
            positionCoachPositionId: position,
        }));
        setCreatedCoachPosition(newCoachPosition);
    };

    const createCoachAccreditation = async (accreditation, coachID) => {
        const newCoachAccreditation = await DataStore.save(new AccreditationCoach({
            coachID: coachID,
            accreditationCoachAccreditationId: accreditation,
        }));
        setCreatedCoachAccreditation(newCoachAccreditation);
    };

    const createCoachAge = async (age, coachID) => {
        const newCoachAge = await DataStore.save(new AgeCoach({
            coachID: coachID,
            ageCoachAgeId: age,
        }));
        setCreatedCoachAge(newCoachAge);
    };

    const createCoachSpeciality = async (speciality, coachID) => {
        const newCoachSpeciality = await DataStore.save(new SpecialityCoach({
            coachID: coachID,
            specialityCoachSpecialityId: speciality,
        }));
        setCreatedCoachSpeciality(newCoachSpeciality);
    };

    const createCoachAvailability = async (availability, coachID) => {
        const newCoachAvailability = await Promise.all(
            availability.map((a) =>
                DataStore.save(
                    new Availability({
                        day: a.day,
                        time: a.time,
                        coachID: coachID,
                    })
                )
            )
        );
        setCreatedCoachAvailability(newCoachAvailability);
    };

    const updateCoach = async (dbCoach, coach, position, accreditation, age, speciality, availability) => {
        const updatedCoach = await DataStore.save(
            Coach.copyOf(dbCoach, (updated) => {
            updated.highlights = coach.highlights;
            updated.sessionPlan = coach.sessionplan;
            updated.background = coach.athleticbackground;
            updated.yearsCoaching = coach.coachexperience;
            updated.yearsPlaying = coach.experience;
            updated.college = coach.college;
            updated.fullName = coach.name;
            updated.streetAddress = coach.address;
            updated.city = coach.city;
            updated.state = coach.state;
            updated.zip = coach.zip;
            updated.email = coach.email;
            updated.shortDesc = coach.description;
            updated.phoneNbr = coach.phoneInput;
            updated.dob = coach.date;
            updated.image = coach.image;
            updated.sportID = coach.sport;
            updated.startPrice = 100.0;
        }));
        setCreatedCoach(updatedCoach);
        updateCoachPosition(coachDBPosition, position);
        updateCoachAccreditation(coachDBAccreditation, accreditation);
        updateCoachAge(coachDBAge, age);
        updateCoachSpeciality(coachDBSpecialty, speciality);
        
    };

    const updateCoachPosition = async (dbPosition, position) => {
        const updatedCoachPosition = await DataStore.save(
            PositionCoach.copyOf(dbPosition, (updated) => {
            updated.positionCoachPositionId = position;
        }));
        setCreatedCoachPosition(updatedCoachPosition);
    };

    const updateCoachAccreditation = async (dbAccreditation, accreditation) => {
        const updatedCoachAccreditation = await DataStore.save(
            AccreditationCoach.copyOf(dbAccreditation, (updated) => {
            updated.accreditationCoachAccreditationId = accreditation;
        }));
        setCreatedCoachAccreditation(updatedCoachAccreditation);
    };

    const updateCoachAge = async (dbAge, age) => {
        const updatedCoachAge = await DataStore.save(
            AccreditationCoach.copyOf(dbAge, (updated) => {
            updated.ageCoachAgeId = age;
        }));
        setCreatedCoachAge(updatedCoachAge);
    };

    const updateCoachSpeciality = async (dbSpeciality, speciality) => {
        const updatedCoachSpeciality = await DataStore.save(
            SpecialityCoach.copyOf(dbSpeciality, (updated) => {
            updated.specialityCoachSpecialityId = speciality;
        }));
        setCreatedCoachSpeciality(updatedCoachSpeciality);
    };

    return (
        <CoachContext.Provider value={{
            createdCoach,
            setCreatedCoach,
            createCoach,
            createdCoachPosition,
            setCreatedCoachPosition,
            createCoachPosition,
            createdCoachAccreditation,
            setCreatedCoachAccreditation,
            createCoachAccreditation,
            createdCoachAge,
            setCreatedCoachAge,
            createCoachAge,
            createdCoachSpeciality,
            setCreatedCoachSpeciality,
            createCoachSpeciality,
            createdCoachAvailability,
            setCreatedCoachAvailability,
            createCoachAvailability,
            coachAuthUser, coachDBUser, sub, setCoachDBUser, coachDBPosition, coachDBAge, coachDBAccreditation, coachDBSpecialty, coachDBAvailability,
            updateCoach, getCoachDbUser,
        }}>
            {children}
        </CoachContext.Provider>
    );
};

export default CoachContextProvider;

export const useCoachContext = () => useContext(CoachContext);