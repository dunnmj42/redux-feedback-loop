import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// success page component
function Success() {
  const history = useHistory();

  // send to start for new feedback
  const nextPage = () => {
    history.push("/");
  };

  return (
    <Card>
      <CardContent>
        <h1>Thank You!</h1>
        <Button variant="outlined" onClick={nextPage}>
          Leave New Feedback
        </Button>
      </CardContent>
    </Card>
  );
}

export default Success;
