import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = () => {
    console.log(comments);
    dispatch({
      type: "SET_COMMENTS",
      payload: { comments },
    });
    history.push("/review");
  };

  const backButton = () => {
    history.push("/supported");
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <h2>(This is optional!)</h2>
      <form onSubmit={nextPage}>
        <input
          type="text"
          placeholder="Any Comments?"
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
      <br />
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default Comments;
