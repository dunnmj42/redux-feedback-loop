import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function Review() {

  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportedReducer);
  const comment = useSelector((store) => store.commentReducer);

  const history = useHistory();

  const nextPage = () => {
    history.push('/success')
  }

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {feeling.feeling}</p>
      <p>Understanding: {understanding.understanding}</p>
      <p>Support: {support.supported}</p>
      <p>Comments: {comment.comment}</p>
      <button onClick={nextPage}>Submit</button>
    </div>
  )
};

export default Review;