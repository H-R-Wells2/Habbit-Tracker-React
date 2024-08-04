import { useDispatch } from "react-redux";
import { toggleHabitStatus } from "../Redux/Reducer/habitReducer";
import SingleDayStatus from "./SingleDayStatus";
import { toast } from "react-toastify";

const WeekStatus = ({ habitIndex, handleCloseClick, showStatus, weekDays }) => {
    const dispatch = useDispatch();

    const toggleStatus = (dayIndex, status) => {
        dispatch(toggleHabitStatus({ habitIndex, dayIndex, status }));
        if (status) {
            toast.success(`${showStatus.name} done on ${weekDays[dayIndex]}`);
        }
    };

    return (
        <div className="w-full p-4 bg-white rounded-md border border-indigo-200">
            <button
                className="md:hidden float-right bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={handleCloseClick}
            >
                Close
            </button>

            <h1 className="text-center text-2xl font-semibold text-indigo-600">
                <span className="text-black">Habit:</span> {showStatus.name}
            </h1>

            <h2 className="text-md font-semibold text-gray-700">
                <span className="md:hidden float-left">Days Completed: {showStatus.completedDays}/7</span>
                <span className="float-right">Added On: {showStatus.createdOn}</span>
            </h2>

            <div className="mt-4 overflow-auto">
                <h3 className="text-lg font-semibold text-center">Your Weekly Progress:</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {weekDays.map((day, i) => (
                        <SingleDayStatus
                            key={i}
                            day={day}
                            i={i}
                            status={showStatus.weekStatus[i]}
                            toggleStatus={toggleStatus}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeekStatus;
