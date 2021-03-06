import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// understanding form
function Understanding() {
  const [understanding, setUnderstanding] = useState("Understanding?"); // local state

  const history = useHistory();
  const dispatch = useDispatch();

  // navigate to next form on dispatch
  const nextPage = (event) => {
    event.preventDefault();
    console.log(understanding);
    if (understanding > 0) {
      // input validation
      dispatch({
        type: "SET_UNDERSTANDING",
        payload: { understanding },
      });
      history.push("/supported");
    } else {
      alert("Please enter a value before continuing!"); // alert on validation fail
    }
  };

  // backwards navigation
  const backButton = () => {
    history.push("/feeling");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h1>How well are you understanding the content?</h1>
          <form onSubmit={nextPage}>
            <Select
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
        </CardContent>
      </Card>
      <br />
      <Button variant="outlined" onClick={backButton}>
        Back
      </Button>
    </div>
  );
}

export default Understanding;
