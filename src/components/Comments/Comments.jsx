import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Comments() {

  const [comments, setComments] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(comments);
    dispatch({
      type: "SET_COMMENTS",
      payload: {comments}
    });
    history.push('/review');
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={nextPage}>
      <input type="text" placeholder="Any Comments?" onChange={(e) => setComments(e.target.value)}/>
      <button type="submit">Next</button>
      </form>
    </div>
  )
};

export default Comments;