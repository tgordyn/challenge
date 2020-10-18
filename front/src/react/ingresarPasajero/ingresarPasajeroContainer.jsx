import React from "react";
import IngresarPasajero from "./ingresarPasajero";

//import { fetchPassenger } from "../../redux/actions/passengers";

import { connect } from "react-redux";

class ingresarPasajeroContainer extends React.Component {
    constructor(props) {
      super(props);
      
    }

componentDidMount() {
    //console.log("props", this.props)
  //this.props.fetchPassenger(this.props.id); 
  
}    

render() {
    return (
      <IngresarPasajero/>
    
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    
    
  };
};
const mapDispatchToProps = () => {
  
  return {
    
    
    
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ingresarPasajeroContainer);    