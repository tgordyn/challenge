import React from "react";

import { Button, Form } from "react-bootstrap";

import "./ingresar.scss";

//import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default ({
//   nombreChange,
//   apellidoChange,
//   vueloChange,
  handleChange,  
  handleSubmit,
  name,
  lastname,
  numeroVuelo,
  errorName,
  errorLastname,
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
            name="name"
            type="text"
            placeholder="Ingrese el nombre"
            //onChange={nombreChange}
            onChange={handleChange}
            value={name}
          />

        </Form.Group>
        {errorName ? 
                (<p>
                    EL nombre no puede contener números ni carácteres especiales
                </p>):null}
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            name="lastname"
            type="text"
            placeholder="Ingrese el apellido"
            //onChange={apellidoChange}
            onChange={handleChange}
            value={lastname}
          />
        </Form.Group>
        {errorLastname ? 
                (<p>
                    EL apellido no puede contener números ni carácteres especiales
                </p>):null}
        <Form.Group>
          <Form.Label>Número de vuelo</Form.Label>
          <Form.Control
            name="numeroVuelo"
            type="text"
            placeholder="Ingrese el número de vuelo"
            //onChange={vueloChange}
            onChange={handleChange}
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
