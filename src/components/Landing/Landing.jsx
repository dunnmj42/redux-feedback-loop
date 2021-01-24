import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Landing() {
  const history = useHistory();

  const nextPage = () => {
    history.push("/feeling");
  };

  return (
    <div>
      <h1>Leave Your Feedback?</h1>
      <Button variant="outlined" onClick={nextPage}>Let's Get Started!</Button>
    </div>
  );
}

export default Landing;
