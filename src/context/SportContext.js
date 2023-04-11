import { createContext, useState, useEffect, useContext } from "react";
import { DataStore, Hub } from "aws-amplify";
import { Sport, Position } from "../models";

const SportContext = createContext({});

const SportContextProvider = ({ children }) => {
    const [sports, setSports] = useState([]);
    const [positions, setPositions] = useState([]);

    const getSports = () => {
        DataStore.query(Sport).then(setSports);
    };

    useEffect(() => {
        const removeListener = Hub.listen('datastore', async ({ payload }) => {
            if (payload.event === 'syncQueriesReady') {
                getSports();
            }
        });

        DataStore.start();

        return () => removeListener();
    }, []);

    const getPositions = () => {
        DataStore.query(Position).then(setPositions);
    };

    useEffect(() => {
        const removeListener = Hub.listen('datastore', async ({ payload }) => {
            if (payload.event === 'syncQueriesReady') {
                getPositions();
            }
        });

        DataStore.start();

        return () => removeListener();
    }, []);

    return (
        <SportContext.Provider value={{ sports, positions }}>
            {children}
        </SportContext.Provider>
    );
};

export default SportContextProvider;

export const useSportContext = () => useContext(SportContext);