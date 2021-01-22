import {useHistory} from 'react-router-dom';

function Landing() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/feeling')
  }

  return (
    <div>
      <h1>Leave Your Feedback?</h1>
      <button onClick={nextPage}>Let's Get Started!</button>
    </div>
  )
};

export default Landing;