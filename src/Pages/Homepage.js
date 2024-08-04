// importing react hooks
import { useEffect } from "react";

// redux hooks
import { useDispatch } from "react-redux";

// actions from habitReducer
import { quoteFetchThunk } from "../Redux/Reducer/habitReducer";

// different Components used in homepage
import AddHabit from "../Component/AddHabit";
import Quote from "../Component/Quote";
import Suggestions from "../Component/Suggestions";

// render the homepage
const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(quoteFetchThunk());
    }, [dispatch]);

    return (
        <div className="w-full h-full flex justify-center pt-5 pb-10 bg-gray-300 overflow-auto min-h-screen">
            <div className="w-full md:w-[90%] h-full flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-between w-full md:w-2/3 h-fit bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <div className="w-full h-full flex flex-col items-center mb-4">
                        <Quote />
                    </div>
                    <div className="w-full flex justify-center mb-4">
                        <AddHabit />
                    </div>
                    <div className="md:hidden w-full h-fit rounded-lg bg-white shadow-lg overflow-auto">
                        <Suggestions />
                    </div>
                </div>
                <div className="hidden md:block w-1/3 h-full rounded-lg bg-white shadow-lg ml-4 overflow-auto">
                    <Suggestions />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
