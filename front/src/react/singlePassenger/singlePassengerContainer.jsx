import React from "react";
import PasajeroId from "./singlePassenger";

import { fetchPassenger } from "../../redux/actions/passengers";
import { agregarEquipaje } from "../../redux/actions/packages";


import { connect } from "react-redux";

class SinglePassengerContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        boolean: false,
        category:"",
       
      }   

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        return this.setState({
          category: event.target.value,
          //boolean:!this.state.boolean
      });
      
    };
    
   handleSubmit (event){
    event.preventDefault();
    const obj = {
      category: this.state.category,
      passengerId: this.props.id
    }
    this.props.agregarEquipaje(obj).then(()=>{
      return this.setState({
        boolean:!this.state.boolean
      })
    });
   }
    
componentDidUpdate(prevProps,prevState){
  if(prevState.boolean !== this.state.boolean){
    this.props.fetchPassenger(this.props.id);   
  }
};

componentDidMount() {
    //console.log("props", this.props)
  this.props.fetchPassenger(this.props.id);  
}    


render() {
    return (
      <PasajeroId
      pasajero={this.props.pasajero}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
    
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    id: ownProps.match.params.id,  
    pasajero: state.passengersReducers.one,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  
  return {
    
    fetchPassenger: id => dispatch(fetchPassenger(id)),
    agregarEquipaje: obj => dispatch(agregarEquipaje(obj))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SinglePassengerContainer);    