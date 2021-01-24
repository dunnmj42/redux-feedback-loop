import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <p>Feelings: {feeling.feeling}</p>
      <p>Understanding: {understanding.understanding}</p>
      <p>Support: {support.support}</p>
      <p>Comments: {comments.comments}</p>
      <button onClick={nextPage}>Submit</button>
      <br />
      <br />
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default Review;
