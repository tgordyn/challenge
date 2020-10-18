import React from "react";
import Passengers from "./Passengers";
import { fetchAllPassengers } from "../../redux/actions/passengers";

import { connect } from "react-redux";

class PassengersContainer extends React.Component {
    constructor(props) {
      super(props);
      
    }

componentDidMount() {
  this.props.fetchAllPassengers(); 
}    

render() {
    return (
      <Passengers 
      passenger={this.props.passenger}
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    passenger: state.passengersReducers.allPassengers,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    fetchAllPassengers: () => dispatch(fetchAllPassengers()),
    
  };
};

    export default connect(mapStateToProps,mapDispatchToProps)(PassengersContainer);    