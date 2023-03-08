import { createContext, useContext, useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Coach, PositionCoach, AccreditationCoach, AgeCoach, SpecialityCoach, Availability } from '../models';

const CoachContext = createContext({});

const CoachContextProvider = ({ children }) => {
    const [coach, setCoach] = useState({});

    const createCoach = async (coach) => {
        const result = await DataStore.save(new Coach({
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
            email: coach.zip,
            shortDesc: coach.description,
            phoneNbr: coach.phoneInput,
            dob: coach.date,
            sportID: coach.sport,
          })); 
          setCoach(result);
          return result;
    };

    return (
        <CoachContext.Provider value={{ coach, setCoach, createCoach }}>
            {children}
        </CoachContext.Provider>
    );
};

export default CoachContextProvider;

export const useOrderContext = () => useContext(CoachContext);