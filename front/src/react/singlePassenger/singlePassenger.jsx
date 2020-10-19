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

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import "./single.scss";

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

//   const useStyles = makeStyles({
//     table: {
//       minWidth: 500,
//     },

//   });

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default ({ pasajero, handleChange, handleSubmit }) => {
  console.log("pasajero es", pasajero.packages);
  const classes = useStyles();
  let total = 0;
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
              <StyledTableCell align="left">Total</StyledTableCell>
              <StyledTableCell align="left">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
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
                {pasajero.packages &&
                  pasajero.packages.map((bulto) => {
                    total += 1;

                    return <div>{bulto.category}</div>;
                  })}
              </StyledTableCell>
              <StyledTableCell align="left">{total}</StyledTableCell>
              <StyledTableCell align="left">
                {total < 3 ? (
                  <form onSubmit={handleSubmit}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Agregar equipaje
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                      >
                        <MenuItem value={"prenda"}>Prenda</MenuItem>
                        <MenuItem value={"pequeño"}>Pequeño</MenuItem>
                        <MenuItem value={"grande"}>Grande</MenuItem>
                      </Select>
                      <button type="submit" value={"submit"} className="buttonSubmit">
                        Agregar
                      </button>
                    </FormControl>
                  </form>
                ) : null}

                <br />
                <Link to={"/passengers"} className="linkPasajeroId">
                  {total > 0 ? "Entregar bultos" : null}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
