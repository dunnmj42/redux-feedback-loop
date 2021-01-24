import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Understanding() {
  const [understanding, setUnderstanding] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = () => {
    console.log(understanding);
    if (understanding) {
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: { understanding },
      });
      history.push("/supported");
    } else {
      alert("Please enter a value before continuing!");
    }
  };

  const backButton = () => {
    history.push("/feeling");
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={nextPage}>
        <select
          name="understanding"
          id="understanding"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        >
          <option value="" disabled>
            Understanding?
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Next</button>
      </form>
      <br />
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default Understanding;
