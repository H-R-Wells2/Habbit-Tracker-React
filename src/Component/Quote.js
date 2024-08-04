import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";

const Quote = () => {
    const { quote } = useSelector(habitSelector);

    return (
        <div className="w-full lg:w-4/5 h-fit mt-4 mb-6 p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white">
            <h2 className="text-lg font-medium mb-2">
                Quote of the Day:
            </h2>

            <blockquote className="text-center text-xl font-semibold italic mb-2">
                "{quote.text}"
            </blockquote>

            <p className="text-right text-md font-semibold">
                — {quote.author}
            </p>
        </div>
    );
};

export default Quote;
