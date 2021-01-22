import {useHistory} from 'react-router-dom';

function Understanding() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/supported')
  }

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Understanding;