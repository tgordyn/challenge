import React from "react";
import Passengers from "./Passengers";
import { fetchAllPassengers } from "../../redux/actions/passengers";
import { eliminarUsuario } from "../../redux/actions/passengers";

import { connect } from "react-redux";

class PassengersContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        boolean: false,
      }

      this.handleClick = this.handleClick.bind(this)  
    }

handleClick (id) {
  const { eliminarUsuario } = this.props
  eliminarUsuario(id).then(()=>{
    return this.setState({
      boolean:!this.state.boolean
    })
  });
};

componentDidUpdate(prevProps,prevState){
  
  if(prevState.boolean !== this.state.boolean){
    this.props.fetchAllPassengers();
  }
};

componentDidMount() {
  this.props.fetchAllPassengers(); 
}    

render() {
    return (
      <Passengers 
      passenger={this.props.passenger}
      handleClick={this.handleClick}
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
    eliminarUsuario: (id) => dispatch(eliminarUsuario(id))
  };
};

 export default connect(mapStateToProps,mapDispatchToProps)(PassengersContainer);    