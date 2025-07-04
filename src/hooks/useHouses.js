import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus.js";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch("https://localhost:4000/house");
                const houses = await response.json();
                setHouses(houses);
                setLoadingState(loadingStatus.loaded);
            }
            catch {
                setLoadingState(loadingStatus.hasErrorer);

            }
        }

        fetchHouses();
    }, []);

    return { houses, setHouses, loadingState };
};

export default useHouses;