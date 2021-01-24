import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Supported() {

  const [support, setSupport] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = (event) => {
    event.preventDefault();
    console.log(support);
    if (support) {
      dispatch({
        type: "SET_SUPPORTED",
        payload: {support}
      });
      history.push('/comments');
    } else {
      alert('Please enter a value before continuing!');
    }
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={nextPage}>
      <select name="support" id="support" onChange={(e) => setSupport(e.target.value)}>
        <option value="" disabled selected>Supported?</option>
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

export default Supported;