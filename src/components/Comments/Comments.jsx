import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Comments() {

  const [comment, setComment] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = () => {
    history.push('/review')
  }

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <input type="text" placeholder="Any Comments?"/>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Comments;