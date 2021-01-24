import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();

  const nextPage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Thank You!</h1>
      <button onClick={nextPage}>Leave New Feedback</button>
    </div>
  );
}

export default Success;
