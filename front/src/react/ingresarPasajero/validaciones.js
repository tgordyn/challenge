export const isValidName = name => {
    return !/^[A-Z\s?]+$/i.test(name);
  };


  export const isValidVuelo = vuelo => {
      let largoincorrecto = false;
      let caracterincorrecto = false;
      
      if(vuelo.length<5 || vuelo.length>5){
          largoincorrecto = true;
      } 
    caracterincorrecto = !/^[#.0-9a-zA-Z\s,-]+$/i.test(vuelo)
    return largoincorrecto || caracterincorrecto ? true : false
    
}