import {useHistory} from 'react-router-dom';

function Feeling() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/understanding')
  }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Feeling;