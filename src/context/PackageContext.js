import { createContext, useContext, useState } from "react";
import { DataStore } from "aws-amplify";
import { Package } from '../models';

const PackageContext = createContext({});

const PackageContextProvider = ({ children }) => {

    const [packages, setPackages] = useState([]);

    const fetchPackages = async (coach) => {
        DataStore.query(Package, (p) => p.coachID.eq(coach)).then(setPackages);
    };

    return (<PackageContext.Provider value={{ packages, setPackages, fetchPackages }}>
        {children}</PackageContext.Provider>
    );
};

export default PackageContextProvider;
export const usePackageContext = () => useContext(PackageContext);