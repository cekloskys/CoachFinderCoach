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
    
    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setCoachAuthUser);
    }, []);

    const getCoachDbUser = () => {
        console.log(sub);
        DataStore.query(Coach, (coach) => coach.sub.eq(sub)).then((coaches) =>
        setCoachDBUser(coaches[0]));
    };

    useEffect(() => {
        if (!sub) {
            return;
        }
        
        const removeListener = Hub.listen('datastore', async ({ payload }) => {
            console.log(payload.event);
            if (payload.event === 'syncQueriesReady') {
                getCoachDbUser();
            }
        });

        DataStore.start();

        return () => removeListener();
    }, [sub]);

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
            coachAuthUser, coachDBUser, sub, setCoachDBUser
        }}>
            {children}
        </CoachContext.Provider>
    );
};

export default CoachContextProvider;

export const useCoachContext = () => useContext(CoachContext);