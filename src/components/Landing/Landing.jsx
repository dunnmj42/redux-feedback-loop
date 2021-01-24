import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// "home" page component 
function Landing() {
  const history = useHistory();

  // push to Feeling for feedback start
  const nextPage = () => {
    history.push("/feeling");
  };

  return (
    <Card>
      <CardContent>
        <h1>Leave Your Feedback?</h1>
        <Button variant="outlined" onClick={nextPage}>
          Let's Get Started!
        </Button>
      </CardContent>
    </Card>
  );
}

export default Landing;
