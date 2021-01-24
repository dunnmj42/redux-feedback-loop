import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Success() {
  const history = useHistory();

  const nextPage = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Thank You!</h1>
      <Button variant="outlined" onClick={nextPage}>Leave New Feedback</Button>
    </div>
  );
}

export default Success;
