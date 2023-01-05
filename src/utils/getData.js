//Se obtiene la dirección de la API
const API = 'https://randomuser.me/api/';

const getData = async (id) => {
  //Si se pasa un id, regresa la url con el id adicional, de lo contrario sólo la url
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data.results[0];
  } 
  catch (error) {
    console.log('Fetch Error', error);
  };
};
//Se exporta la variable donde se guarda la función
export default getData;