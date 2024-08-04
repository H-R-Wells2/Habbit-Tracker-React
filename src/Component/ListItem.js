// to render a single list item of suggestion habit list on home page

// redux hook
import { useDispatch } from "react-redux";

// action to store data of selected habit from the suggestion list
import { setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// component to render the single item
const ListItem = (props) => {
    const dispatch = useDispatch();
    const { habit, url } = props.habit;

    const handleClick = () => {
        dispatch(setSuggestionSelected(props.habit));
    };

    return (
        <div
            className="w-full h-14 bg-indigo-200 font-semibold my-2 rounded-md p-2 flex justify-between items-center cursor-pointer hover:bg-indigo-300 transition-colors"
            onClick={handleClick}
        >
            <div>{habit}</div>
            <img src={url} alt="icon" className="h-10 w-10" />
        </div>
    );
};

export default ListItem;
