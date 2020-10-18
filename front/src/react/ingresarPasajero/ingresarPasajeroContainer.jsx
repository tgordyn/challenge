import React from "react";
import IngresarPasajero from "./ingresarPasajero";

import { crearUsuario } from "../../redux/actions/passengers";

import { connect } from "react-redux";

class ingresarPasajeroContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        lastname: "",
        numeroVuelo: ""
      }
      this.nombreChange = this.nombreChange.bind(this)
      this.apellidoChange = this.apellidoChange.bind(this)
      this.vueloChange = this.vueloChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)  
    }

    nombreChange(evt) {
      const value = evt.target.value;
      this.setState({ name: value });
    }

    apellidoChange(evt) {
      const value = evt.target.value;
      this.setState({ lastname: value });
    }

    vueloChange(evt) {
      const value = evt.target.value;
      this.setState({ numeroVuelo: value });
    }

    handleSubmit(event) {
      event.preventDefault();
        const obj = {
        name: this.state.name, 
        lastname: this.state.lastname, 
        numeroVuelo: this.state.numeroVuelo
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
      nombreChange={this.nombreChange}
      apellidoChange={this.apellidoChange}
      vueloChange={this.vueloChange}
      handleSubmit={this.handleSubmit}

      name={this.state.name}
      lastname={this.state.lastname}
      numeroVuelo={this.state.numeroVuelo}
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