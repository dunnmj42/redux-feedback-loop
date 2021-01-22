import {useHistory} from 'react-router-dom';

function Review() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/success')
  }

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <button onClick={nextPage}>Submit</button>
    </div>
  )
};

export default Review;