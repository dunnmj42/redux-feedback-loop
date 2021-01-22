import {useHistory} from 'react-router-dom';

function Supported() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/comments')
  }

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Supported;