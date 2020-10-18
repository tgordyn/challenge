export const isValidName = name => {
    return !/^[A-Z\s?]+$/i.test(name);
  };


  export const isValidVuelo = vuelo => {
    return !/^[#.0-9a-zA-Z\s,-]+$/i.test(vuelo)
    
}