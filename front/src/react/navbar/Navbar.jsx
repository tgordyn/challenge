import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export default function navbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="navbarBrand">
        <Link
          to="/passengers"
          style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
        >
          Listado de pasajeros
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand className="navbarBrand">
          <Link
            to="/addpassenger"
            style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
          >
            Agregar pasajero
                  <AddIcon
                    className="buttonAdd"
                    fontSize="large"
                  />
          </Link>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
}
