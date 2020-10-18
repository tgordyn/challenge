import React from "react";
import IngresarPasajero from "./ingresarPasajero";

import { crearUsuario } from "../../redux/actions/passengers";
import {isValidName,isValidVuelo} from "./validaciones"
import { connect } from "react-redux";

class ingresarPasajeroContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        lastname: "",
        numeroVuelo: "",
        errorName: false,
        errorLastname: false,
        errorVuelo: false,
      }
      //this.nombreChange = this.nombreChange.bind(this)
      //this.apellidoChange = this.apellidoChange.bind(this)
      //this.vueloChange = this.vueloChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)   
    }

    // nombreChange(evt) {
    //   const value = evt.target.value;
    //   this.setState({ name: value });
    // }

    // apellidoChange(evt) {
    //   const value = evt.target.value;
    //   this.setState({ lastname: value });
    // }

    // vueloChange(evt) {
    //   const value = evt.target.value;
    //   this.setState({ numeroVuelo: value });
    // }

    handleChange (event) {
      const value = event.target.value
      switch (event.target.name) {
        
        case "name":
          //const value = event.target.value
          return this.setState({ name: value, errorName:isValidName(value) });
        case "lastname":

          return this.setState({ lastname: value, errorLastname:isValidName(value) });
        case "numeroVuelo":
          return this.setState({ numeroVuelo: event.target.value });
      }  
    }

    // handleSubmit (event) {
    //   event.preventDefault();
    //     const obj = {
    //     name: this.state.name, 
    //     lastname: this.state.lastname, 
    //     numeroVuelo: this.state.numeroVuelo
    //     }
    // this.props.crearUsuario(obj)
    // }

    handleSubmit (event) {
      event.preventDefault();
        const obj = {
        name: event.target[0].value,
        lastname: event.target[1].value,
        numeroVuelo: event.target[2].value,
        }
    this.props.crearUsuario(obj)
    }

componentDidMount() {
    //console.log("props", this.props)
  //this.props.fetchPassenger(this.props.id); 
  
}    

render() {
    return (
      <IngresarPasajero
      // nombreChange={this.nombreChange}
      // apellidoChange={this.apellidoChange}
      // vueloChange={this.vueloChange}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}

      name={this.state.name}
      lastname={this.state.lastname}
      numeroVuelo={this.state.numeroVuelo}
      errorName = {this.state.errorName}
      errorLastname = {this.state.errorLastname}
      />
    
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    
    
  };
};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    crearUsuario: (objeto) => {
      dispatch(crearUsuario(objeto)).then(() => {
        ownProps.history.push("/passengers");
      });
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ingresarPasajeroContainer);    