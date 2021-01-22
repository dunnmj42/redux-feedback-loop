import {useHistory} from 'react-router-dom';

function Comments() {

  const history = useHistory();

  const nextPage = () => {
    history.push('/review')
  }

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Comments;