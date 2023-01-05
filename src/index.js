import Template from './templates/Template.js';//Se recibe el template importando

(async function App() {
  //develve el elemento html si existe
  const main = null || document.getElementById('main');
  //Espera por el template y lo inserta en el elemento html main
  main.innerHTML = await Template();
})();
