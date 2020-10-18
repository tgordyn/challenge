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

import "../home/Home.scss";

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

export default ({ pasajero }) => {
    console.log("pasajero es", pasajero.packages)
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
              <StyledTableCell align="left">Entregar</StyledTableCell>
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
                            total+=1
                        return(
                            bulto.category + " - "
                            
                        )
                            
                    })}       
                  </StyledTableCell>
                  <StyledTableCell align="left">
                   {total}
                  </StyledTableCell>          
                  <StyledTableCell align="left">
                   
                  </StyledTableCell>          

            </StyledTableRow>       
          </TableBody>

          </Table>
          </TableContainer>
            
        </div>
    )
}