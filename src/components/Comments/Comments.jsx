import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Comments() {
  const [comments, setComments] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(comments);
    dispatch({
      type: "SET_COMMENTS",
      payload: { comments },
    });
    history.push("/review");
  };

  const backButton = () => {
    history.push("/supported");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h1>Any comments you want to leave?</h1>
          <h2>(This is optional!)</h2>
          <form onSubmit={nextPage}>
            <TextField
              type="text"
              placeholder="Any Comments?"
              onChange={(e) => setComments(e.target.value)}
            />
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

export default Comments;
