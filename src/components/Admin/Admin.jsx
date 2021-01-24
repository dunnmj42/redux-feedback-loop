import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

// style constructor for MUI
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// Admin page component
function Admin() {
  const [feedbackList, setFeedbackList] = useState([]); // local state for DB data

  const classes = useStyles();

  // useEffect for table population on load
  useEffect(() => {
    getFeedback();
  }, []);

  // axios GET for feedback data from DB
  const getFeedback = () => {
    axios
      .get("/admin")
      .then((response) => {
        setFeedbackList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // DELETE function and axios request
  const deleteRow = (rowToDelete) => {
    let id = rowToDelete.id;

    axios
      .delete(`/admin/delete/${id}`)
      .then((response) => {
        getFeedback(); // repopulate table
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // PUT function and axios request
  const flagRow = (rowToFlag) => {
    let id = rowToFlag.id;

    axios
      .put(`/admin/flag/${id}`)
      .then((response) => {
        getFeedback(); // repopulate table
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h1>Feedback Results</h1>
        </CardContent>
      </Card>
      <br />
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
                  <TableCell>Flag</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbackList.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.feeling}
                    </TableCell>
                    <TableCell>{row.understanding}</TableCell>
                    <TableCell>{row.support}</TableCell>
                    <TableCell>{row.comments}</TableCell>
                    <TableCell>
                      {!row.flagged ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => flagRow(row)}
                        >
                          Flag
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="default"
                          onClick={() => flagRow(row)}
                        >
                          Unflag
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteRow(row)}
                      >
                        Delete
                      </Button>
                    </TableCell>
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
