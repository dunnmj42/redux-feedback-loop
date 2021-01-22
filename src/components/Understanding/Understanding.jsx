import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Understanding() {

  const [understanding, setUnderstanding] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(understanding);
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: {understanding}
    })
    history.push('/supported')
  }

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={nextPage}>
      <select name="understanding" id="understanding" onChange={(e) => setUnderstanding(e.target.value)}>
        <option value="" disabled selected>Understanding?</option>
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

export default Understanding;