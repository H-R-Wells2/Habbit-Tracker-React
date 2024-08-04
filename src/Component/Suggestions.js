import { SuggestedHabit } from "../Data/SuggestedHabit";
import ListItem from "./ListItem";

const Suggestions = () => {
    return (
        <>
            <nav className="w-full h-14 text-xl text-indigo-800 font-semibold shadow-lg p-3 flex justify-center items-center bg-white border-b border-gray-200 sticky top-0">
                Suggestions
            </nav>

            <div className="w-full flex flex-col p-4 bg-gray-50 h-full overflow-y-auto">
                {SuggestedHabit.map((habit, i) => (
                    <ListItem key={i} habit={habit} />
                ))}
            </div>
        </>
    );
};

export default Suggestions;
