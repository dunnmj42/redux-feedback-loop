import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// feeling form
function Feeling() {
  const [feeling, setFeeling] = useState("Feeling?"); // local state

  const history = useHistory();
  const dispatch = useDispatch();

  // navigate to next page on dispatch
  const nextPage = (event) => {
    event.preventDefault();
    console.log(feeling);
    if (feeling > 0) {
      // input validation
      dispatch({
        type: "SET_FEELING",
        payload: { feeling },
      });
      history.push("/understanding");
    } else {
      alert("Please enter a value before continuing!"); // alert on validation fail
    }
  };

  // backwards nav button
  const backButton = () => {
    history.push("/");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h1>How are you feeling today?</h1>
          <form onSubmit={nextPage}>
            <Select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            >
              <MenuItem value={"Feeling?"} disabled>
                Feeling?
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            <Button type="submit">Next</Button>
          </form>
        </CardContent>
      </Card>
      <br />
      <Button variant="outlined" onClick={backButton}>
        Back
      </Button>
    </div>
  );
}

export default Feeling;
