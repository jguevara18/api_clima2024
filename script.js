const btnSearch = document.getElementById("botonBusqueda");
let uriBase = 'https://api.openweathermap.org/data/2.5/weather?';
let apiKey = 'cf49d506207a81093b38f1b32dff1052';

btnSearch.addEventListener('click', ()=>{
const ciudad = document.getElementById("ciudadEntrada").value;    
    if(ciudad){
        fechDatosClima(ciudad);
    }
});
function fechDatosClima(ciudad){
    fetch(`${ uriBase }q=${ ciudad }&appid=${ apiKey }`)
    .then(datos=>datos.json())
    .then(datos=>mostrarDatos(datos))
    
    }



function mostrarDatos(datos){
const divMostrar = document.getElementById('datosClima');  
divMostrar.innerHTML = '';
const nombreCiudad= datos.name;
const temperatura = datos.main.temp;
const descripcion = datos.weather[0].description;
const pais = datos.sys.country;
const icono = datos.weather[0].icon;
const imgIcono = `http://openweathermap.org/img/w/${icono}.png`


const tituloCiudad = document.createElement('h2');
tituloCiudad.textContent = nombreCiudad;
const nombrePais = document.createElement('h3');
nombrePais.innerHTML =  pais;
const tempCiudad = document.createElement('p');
tempCiudad.textContent = `Temperatura: ${temperatura-273,15}°C`;
const descripCiudad = document.createElement('p');
descripCiudad.textContent = `Descripción: ${descripcion}`;
const imgIconoClima = document.createElement('img');
imgIconoClima.src = imgIcono;


divMostrar.appendChild(tituloCiudad);
divMostrar.appendChild(nombrePais);
divMostrar.appendChild(tempCiudad);
divMostrar.appendChild(descripCiudad);
divMostrar.appendChild(imgIconoClima);



}



