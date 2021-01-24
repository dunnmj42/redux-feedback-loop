
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Admin() {

  const [feedbackList, setFeedbackList]

  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <h1>Feedback Results</h1>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="feedback table">
        <TableHead>
          <TableRow>
            <TableCell>Feeling</TableCell>
            <TableCell>Comprehension</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Admin;