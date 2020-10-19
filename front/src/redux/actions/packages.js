import axios from "axios";


export const agregarEquipaje = (objeto) => {
    return (dispatch) => {
      return axios.post("/api/packages", objeto);
    };
  };