import React from "react";
import PasajeroId from "./singlePassenger";

import { fetchPassenger } from "../../redux/actions/passengers";

import { connect } from "react-redux";

class SinglePassengerContainer extends React.Component {
    constructor(props) {
      super(props);
      
    }

componentDidMount() {
    //console.log("props", this.props)
  this.props.fetchPassenger(this.props.id); 
  
}    

render() {
    return (
      <PasajeroId
      pasajero={this.props.pasajero}
      />
    //   <div>hola</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    id: ownProps.match.params.id,  
    pasajero: state.passengersReducers.one,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    
    fetchPassenger: id => dispatch(fetchPassenger(id)),
    
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SinglePassengerContainer);    