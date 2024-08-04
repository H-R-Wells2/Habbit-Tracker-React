import { useDispatch } from "react-redux";
import { setShowStatus } from "../Redux/Reducer/habitReducer";

const HabitListItem = (props) => {
    const dispatch = useDispatch();
    const { name, completedDays, url } = props.habit;

    const handleClick = () => {
        dispatch(setShowStatus(props.habit));
    };

    return (
        <div
            className="w-full h-16 bg-indigo-200 font-semibold my-2 rounded-md p-3 flex justify-between items-center cursor-pointer hover:bg-indigo-300 transition-colors"
            onClick={handleClick}
        >
            <div>
                <p className="text-lg">{name}</p>
                <small className="text-sm text-gray-600">{completedDays}/7 Days</small>
            </div>
            <img src={url} alt="icon" className="h-10 w-10" />
        </div>
    );
};

export default HabitListItem;
