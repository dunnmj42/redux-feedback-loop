import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

function Review() {
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportedReducer);
  const comments = useSelector((store) => store.commentReducer);

  const history = useHistory();

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
    history.push("/success");
  };

  const backButton = () => {
    history.push("/comments");
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <h2>Feelings: {feeling.feeling}</h2>
      <h2>Understanding: {understanding.understanding}</h2>
      <h2>Support: {support.support}</h2>
      <h2>Comments: {comments.comments}</h2>
      <Button variant="outlined" onClick={nextPage}>Submit</Button>
      <br />
      <br />
      <Button variant="outlined" onClick={backButton}>Back</Button>
    </div>
  );
}

export default Review;
