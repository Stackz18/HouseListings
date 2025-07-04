import HouseRow from "./HouseRow.jsx";
import useHouses from "../hooks/useHouses.js";
import loadingStatus from "../helpers/loadingStatus.js";
import LoadingIndicator from "./LoadingIndicator.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const HouseList = () => {
    const {houses, setHouses, loadingState} = useHouses();

if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />

    const addHouse = () => {
        setHouses([
            ...houses,
                  {
                id: 6,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            }
        ]);
    }
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">Houses currently on the market</h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ErrorBoundary fallback="Error loading house rows!">
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                    </ErrorBoundary>
                </tbody>
            </table>

            <button onClick={addHouse} className="btn btn-primary">
                Add
            </button>
        </>
    )
};

export default HouseList;