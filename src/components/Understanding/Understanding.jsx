import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

function Understanding() {
  const [understanding, setUnderstanding] = useState("Understanding?");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(understanding);
    if (understanding > 0) {
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
        <Select
          name="understanding"
          id="understanding"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        >
          <MenuItem value="Understanding?" disabled>
            Understanding?
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <Button type="submit">Next</Button>
      </form>
      <br />
      <Button variant="outlined" onClick={backButton}>Back</Button>
    </div>
  );
}

export default Understanding;
