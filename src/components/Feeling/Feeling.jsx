import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Feeling() {

  const [feeling, setFeeling] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(feeling);
    dispatch({
      type: "SET_FEELING",
      payload: {feeling}
    })
    history.push('/understanding');
  }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form onSubmit={nextPage}>
      <select name="feeling" id="feeling" onChange={(e) => setFeeling(e.target.value)}>
        <option value="" disabled selected>Feeling?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Next</button>
      </form>
    </div>
  )
};

export default Feeling;