import { SINGLEPASSENGER, ALLPASSENGERS } from "../constants";

const initialState = {
  one: {},
  allPassengers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLEPASSENGER:
      return { ...state, one: action.id };
    case ALLPASSENGERS:
        return { ...state, allPassengers: action.passenger };  
    

    default:
      return state;
  }
};