import { createContext, useContext, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Coach, PositionCoach, AccreditationCoach, AgeCoach, SpecialityCoach, Availability } from '../models';

const CoachContext = createContext({});

const CoachContextProvider = ({ children }) => {
    const [createdCoach, setCreatedCoach] = useState(null);
    const [createdCoachPosition, setCreatedCoachPosition] = useState(null);
    const [createdCoachAccreditation, setCreatedCoachAccreditation] = useState(null);
    const [createdCoachAge, setCreatedCoachAge] = useState(null);
    const [createdCoachSpeciality, setCreatedCoachSpeciality] = useState(null);
    const [createdCoachAvailability, setCreatedCoachAvailability] = useState([]);

    /* useEffect(() => {
        const c = {
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "background": "F54yy5uftrgt4gcsssjoyghrgftgwy6iur5feyt4ftfg3dxtfr",
            "city": "Douglassville",
            "college": "Pitt",
            "dob": "3/25/2023",
            "email": "smceklosky@gmail.com",
            "fullName": "Sue Ceklosky",
            "highlights": "F54yy5uftrgt4gcsssjoyghrgftgwy6iur5feyt4ftfg3dxtfr",
            "id": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "phoneNbr": "4847921047",
            "sessionPlan": "F54yy5uftrgt4gcsssjoyghrgftgwy6iur5feyt4ftfg3dxtfr",
            "shortDesc": "F54yy5uftrgt4gcsssjoyghrgftgwy6iur5feyt4ftfg3dxtfr",
            "sportID": "46fa3958-086e-42ce-a016-20bf3014a803",
            "state": "Arizona",
            "streetAddress": "301 Woods Edge Drive",
            "yearsCoaching": 2,
            "yearsPlaying": 3,
            "zip": "19518",
            "image": "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        };
        setCreatedCoach(c);
    }, []);

    useEffect(() => {
        const p = {
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "coachID": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "id": "0d7a15b6-9449-4ce9-bddc-fb4cd8aa347e",
            "positionCoachPositionId": "dff334b2-4071-49bf-b66d-1d503d95baa0"
        };
        setCreatedCoachPosition(p);
    }, []);

    useEffect(() => {
        const a = {
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "accreditationCoachAccreditationId": "8908f874-8d8c-449d-9bf5-d5915a171641",
            "coachID": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "id": "73e44508-5775-431f-a52d-d54f9fdc3cf4"
        };
        setCreatedCoachAccreditation(a);
    }, []);

    useEffect(() => {
        const a = {
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "ageCoachAgeId": "39fbc9bf-810d-4cb2-90d0-6a0daebb01f7",
            "coachID": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "id": "ff6b2600-bc93-444d-a0c5-eb66e5b9b422"
        };
        setCreatedCoachAge(a);
    }, []);

    useEffect(() => {
        const s = {
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "coachID": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "id": "e9d666ab-9c25-4879-84e5-de49addf0b66",
            "specialityCoachSpecialityId": "52ccbf53-b32c-499b-b667-fb0a1a30634d"
        };
        setCreatedCoachSpeciality(s);
    }, []);

    useEffect(() => {
        const a = [{
            "_deleted": undefined,
            "_lastChangedAt": undefined,
            "_version": undefined,
            "coachID": "c0ae401a-1d31-4c0f-be62-71f44380312b",
            "id": "e9d666ab-9c25-4879-84e5-de49addf0b66",
            "day": "Monday",
            "time": "5 PM",
        }];
        setCreatedCoachAvailability(a);
    }, []); */

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
        }}>
            {children}
        </CoachContext.Provider>
    );
};

export default CoachContextProvider;

export const useCoachContext = () => useContext(CoachContext);