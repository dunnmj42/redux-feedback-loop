import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// review page component
function Review() {
  // Selectors for Redux data from forms
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportedReducer);
  const comments = useSelector((store) => store.commentReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  // navigate to next page on successful POST
  const nextPage = () => {
    axios
      .post("/submit", { feeling, understanding, support, comments })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("error in submit");
        console.error(error);
      });
    dispatch({
      type: "CLEAR",
    }); // DISPATCH TO ROOT REDUCER FOR ALL CLEAR
    history.push("/success"); // push to success page
  };

  // backwards navigation button
  const backButton = () => {
    history.push("/comments");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h1>Review Your Feedback</h1>
          <h2>Feelings: {feeling.feeling}</h2>
          <h2>Understanding: {understanding.understanding}</h2>
          <h2>Support: {support.support}</h2>
          <h2>Comments: {comments.comments}</h2>
          <Button variant="contained" color="primary" onClick={nextPage}>
            Submit
          </Button>
        </CardContent>
      </Card>
      <br />
      <Button variant="outlined" onClick={backButton}>
        Back
      </Button>
    </div>
  );
}

export default Review;
