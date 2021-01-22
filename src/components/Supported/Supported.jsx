import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function Supported() {

  const [supported, setSupported] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = () => {
    history.push('/comments')
  }

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <select name="supported" id="supported">
        <option value="" disabled selected>Supported?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={nextPage}>Next</button>
    </div>
  )
};

export default Supported;