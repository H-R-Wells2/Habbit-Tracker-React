import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, habitSelector, setSuggestionSelected } from "../Redux/Reducer/habitReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddHabit = () => {
    const dispatch = useDispatch();
    const { habits, suggestionSelected } = useSelector(habitSelector);
    const [habitName, setHabitName] = useState('');

    useEffect(() => {
        if (suggestionSelected) {
            setHabitName(suggestionSelected.habit);
        }
    }, [suggestionSelected]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDate = new Date().toLocaleDateString();
        const weekStatus = Array(7).fill(null);

        const data = {
            id: habits.length,
            name: habitName,
            completedDays: 0,
            createdOn: newDate,
            url: suggestionSelected ? suggestionSelected.url : 'https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png',
            weekStatus: weekStatus
        };

        dispatch(addHabit(data));
        dispatch(setSuggestionSelected(null));
        setHabitName('');
        toast.success('New Habit Added Successfully!');
    };

    return (
        <div className="w-full lg:w-4/5 h-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
                Add a New Habit
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="habit-name" className="text-lg font-medium text-gray-700">
                    Habit Name:
                </label>
                <input
                    type="text"
                    id="habit-name"
                    placeholder="Enter habit name..."
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out"
                >
                    Add Habit
                </button>
            </form>
        </div>
    );
};

export default AddHabit;
