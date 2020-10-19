import axios from "axios";
import { SINGLEPASSENGER, ALLPASSENGERS } from "../constants";

const onePassenger = (id) => {
  return {
    type: SINGLEPASSENGER,
    id,
  };
};

const allPassengers = (passenger) => {
  return {
    type: ALLPASSENGERS,
    passenger,
  };
};

export const fetchPassenger = (id) => {
  return (dispatch) => {
    return axios.get(`/api/passengers/${id}`).then((res) => {
      return dispatch(onePassenger(res.data));
    });
  };
};

export const fetchAllPassengers = () => {
  return (dispatch) => {
    return axios.get(`/api/passengers`).then((res) => {
      return dispatch(allPassengers(res.data));
    });
  };
};

export const crearUsuario = (objeto) => {
  return (dispatch) => {
    return axios.post("/api/passengers", objeto);
  };
};

export const eliminarUsuario = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/passengers/${id}`);
  };
};