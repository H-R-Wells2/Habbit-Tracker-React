import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { habitSelector, setShowStatus } from "../Redux/Reducer/habitReducer";
import WeekStatus from "./WeekStatus";

// Get days and dates for the last week
const CalculateDayOfWeek = (date) => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const day = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i);
        days[6 - i] = `${day.toDateString().slice(0, 4)}, ${day.toDateString().slice(4)}`;
    }
    return days;
};

const HabitStatus = () => {
    const dispatch = useDispatch();
    const { habits, showStatus } = useSelector(habitSelector);
    const weekDays = CalculateDayOfWeek(new Date());

    const handleCloseClick = (e) => {
        e.preventDefault();
        dispatch(setShowStatus(null));
    };

    return (
        <div className="w-full md:w-2/3 h-full flex flex-col p-3 bg-gray-50 overflow-auto">
            <nav className="w-full mb-3">
                <NavLink to="/">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition-colors">
                        New Habit
                    </button>
                </NavLink>
            </nav>

            <div className="flex flex-col flex-1 bg-white rounded-md shadow-md p-3">
                {!showStatus && (
                    <div className="text-center text-xl font-semibold text-indigo-600">
                        {habits.length !== 0
                            ? 'Select a habit from the list to see your weekly status'
                            : 'Add some habits to see your progress'}
                    </div>
                )}

                {showStatus && (
                    <WeekStatus
                        handleCloseClick={handleCloseClick}
                        showStatus={showStatus}
                        weekDays={weekDays}
                    />
                )}

                <div className="block md:hidden mt-3">
                    {habits.length === 0 ? (
                        <div className="text-center text-xl font-semibold text-indigo-600">
                            Nothing in Your List
                        </div>
                    ) : (
                        habits.map((habit, i) => (
                            <WeekStatus
                                key={i}
                                habitIndex={i}
                                handleCloseClick={handleCloseClick}
                                showStatus={habit}
                                weekDays={weekDays}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HabitStatus;
