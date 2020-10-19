import axios from "axios";


export const agregarEquipaje = (objeto) => {
    return (dispatch) => {
      return axios.post("/api/packages", objeto);
    };
  };

export const entregarEquipaje = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/packages/${id}`);
  }
}  