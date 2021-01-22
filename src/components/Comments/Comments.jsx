import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Comments() {

  const [comment, setComment] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(comment);
    dispatch({
      type: "SET_COMMENT",
      payload: {comment}
    })
    history.push('/review')
  }

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={nextPage}>
      <input type="text" placeholder="Any Comments?" onChange={(e) => setComment(e.target.value)}/>
      <button type="submit">Next</button>
      </form>
    </div>
  )
};

export default Comments;