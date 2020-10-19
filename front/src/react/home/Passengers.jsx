import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Navbar from "../navbar/Navbar";
import "./Home.scss";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#f9f159",
    color: "#363733",
    fontSize: 20,
    fontFamily: "Proxima Nova Regular",
  },
  body: {
    fontSize: 16,
    fontFamily: "Proxima Nova Regular",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default ({ passenger, handleClick }) => {
  const classes = useStyles();
  // console.log("pasajero", passenger);
  return (
    <div>
      <Navbar />

      <TableContainer component={Paper} className="tablaContainer">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Apellido</StyledTableCell>
              <StyledTableCell align="left">Número de vuelo</StyledTableCell>
              <StyledTableCell align="left">Bultos guardados</StyledTableCell>
              <StyledTableCell align="left">Eliminar</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {passenger &&
              passenger.map((pasajero) => (
                <StyledTableRow key={pasajero.id}>
                  <StyledTableCell component="th" scope="row">
                    {pasajero.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {pasajero.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {pasajero.numeroVuelo}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Link to={`/passengers/${pasajero.id}`} className="linkPasajeroId">
                      VER DETALLE
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                  <DeleteIcon
                    className="buttonEditar"
                    onClick={() => handleClick(pasajero.id)}
                    fontSize="large"
                    style={{ color: "#e14d54" }}
                  />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
