import React from "react";

const Problem = (props) => {
    return(
        <div>
          <label>
            <input type="radio" value=""/>
            {props.problem}
          </label>
        </div>
    )
}

export default Problem;