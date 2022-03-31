import { useLocalStorage } from "../../utils/useLocalStorage";

const Problem = (props) => {
    // Storing the item checked state in local storage using a string literal for the key
    const [itemChecked, setItemChecked] = useLocalStorage(
        `${props.index}-radio`,
        false
    );

    // function to update the state value once an input changes
    const completedChallenge = (e) => {
        setItemChecked(!itemChecked);
        console.log("done");
        e.setAttribute("disabled", "true");
    };

    return (
        <div className="popup__challenges">
            <span className="popup__accordion">+</span>
            <label htmlFor="popup__challenge__label">{props.problem}</label>

            <input
                className="popup__challenge__checkbox"
                type="checkbox"
                checked={itemChecked}
                onChange={completedChallenge}
            />
        </div>
    );
};

export default Problem;
