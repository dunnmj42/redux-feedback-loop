import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

function Supported() {
  const [support, setSupport] = useState("Supported?");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(support);
    if (support) {
      dispatch({
        type: "SET_SUPPORTED",
        payload: { support },
      });
      history.push("/comments");
    } else {
      alert("Please enter a value before continuing!");
    }
  };

  const backButton = () => {
    history.push("/understanding");
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={nextPage}>
        <Select
          name="support"
          id="support"
          value={support}
          onChange={(e) => setSupport(e.target.value)}
        >
          <MenuItem value={"Supported?"} disabled>
            Supported?
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

export default Supported;
