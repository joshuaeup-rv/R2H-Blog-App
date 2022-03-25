import { useState} from "react";

const Problem = (props) => {

 const [itemChecked, setitemChecked] = useState(false);

 const completedChallenge = (e) => {
    setitemChecked(!itemChecked);
    console.log("done");
  e.setAttribute("disabled", "true");
};

    return (
        <div className="popup__challenges">
          <span className="popup__accordion">+</span>
          <label htmlFor="popup__challenge__label">
          {props.problem}
          </label>

          <input className="popup__challenge__checkbox" type="checkbox" checked={itemChecked} onChange={completedChallenge}/>
        </div>
    )
}

export default Problem;