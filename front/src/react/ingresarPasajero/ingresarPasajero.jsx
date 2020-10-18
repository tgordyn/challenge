import React from "react";

import { Button, Form } from "react-bootstrap";

import "./ingresar.scss";

//import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default ({
  nombreChange,
  apellidoChange,
  vueloChange,
  handleSubmit,
  name,
  lastname,
  numeroVuelo,
}) => {
  return (
    <div>
      <Navbar />

      <Form
        className="formGroup"
        style={{ fontFamily: "Proxima Nova Regular" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="formGroupNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            onChange={nombreChange}
            value={name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            onChange={apellidoChange}
            value={lastname}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Número de vuelo</Form.Label>
          <Form.Control
            name="numero de vuelo"
            type="text"
            placeholder="Ingrese el número de vuelo"
            onChange={vueloChange}
            value={numeroVuelo}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          value={"submit"}
          className="buttonSubmit"
          style={{ color: "#363733", fontFamily: "Proxima Nova Regular" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
