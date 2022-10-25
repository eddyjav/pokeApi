# Front-end PokeApi

*Esta aplicación la denomino pokedex y muestra los 150 pokemones de la primera generación, para lo cual muestra en cada página 10 pokemones e incluye una barra de búsqueda, cada pokemon cuenta con una tarjeta donde se muestra un texto introductorio y cuenta con un botón en el caso de que se desee ver más a detalle ese pokemon.*

### Puedes ver la App desplegada en heroku

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Comenzando 🚀**

Para ejecutar el proyecto de manera local puedes clonar este repositorio para luego ejecutar

```
npm install
npm run dev
```

El proyecto se ejecuta en [http://localhost:3000](http://localhost:3000/) 

### Proceso de construcción **Instalación 🔧**

Para la construcción del frontend, utilice **Vite** 

Para controlar el estado utilicé el patrón redux junto con sus librerías ************************************************************redux y reduxtoolkit************************************************************

**Configuración de Redux:**

Para la configuración de redux creamos la carpeta ************store************ y dentro un archivo con el mismo nombre que es el que contiene la configuración necesaria para poder utilizar los reducers que se procederán a crear.

****************pokemonSlice:**************** contiene la configuración para el manejo de los estados

********************************thunk:******************************** en este archivo se  gestiona todas las peticiones asíncronas, donde se consume la información de la API. 

La estructura del proyecto es la siguiente

poke-api

- api
- assets
- components
- helpers
- pages
- router
- store

El componente principal tiene como nombre **main.jsx** el cual renderiza todas las rutas que son pasadas por el componente **PokeApp.jsx**

### Componentes principales

******************AppRouter.jsx******************

Rutas, para esto utilizo el archivo **AppRouter** que se encuentra dentro de la carpeta **************router.**************

Para realizar el ruteo utilizamos **react-router-doom** el cual nos permite crear rutas entre componentes de una manera sencilla

En este mismo componente importamos un componente para generar la ************barra de************ navegación, ************************un componente que lleva el mismo nombre ********************NavBar.jsx******************** y se encuentra dentro de la carpeta **components.**

**************PokeDex.jsx**************

Es el componente que muestra la **pantalla principal** de la aplicación, en este encontramos el despliegue de los pokemons, visualizándolos de 10 en 10, con botones para avanzar hacia adelante y atrás de entre todos ellos.

Para listar los pokemons hacemos de redux obteniendo los datos del store, que ya fue configurado.

**************************************Barra de búsqueda:************************************** su función es mostrar el pokemon que estamos buscando y mostrarlo en la misma página y se muestra un botón para mostrar todos los pokemons. 

**NoPokemon.jsx**: Si no se encuentra un pokemon se muestra una tarjeta con un indicativo avisando al usuario que el pokemon no existe.

****************Tarjetas de pokemons - PokemonCard.jsx:**************** es un componente que muestra a cada pokemon cuenta con una tarjeta individual, para esto enviamos como props el arreglo de pokemons y la página actual en la que nos encontramos , la tarjeta muestra una corta descripción para poder visualizar toda la información tenemos el botón “************************Mas detalles”************************  este nos dirige a una zona individual donde se muestran más detalles de cada pokemon.

Para mostrar la información individual de cada pokemon utilizamos una ruta nueva con el uso de **********Link********** a la cual le enviamos como parámetro el nombre del pokemon a mostrar.

**************************Pokemon.jsx:************************** es la página donde se muestra a detalle cada pokemon con información como tipo, peso, altura, evolución, estadísticas(vida, ataque, defensa). Cuenta con un **botón** para **regresar** a la página principal donde están listados todos los pokemons.

Para obtener toda esta información hacemos uso de ************redux************ obteniendo los datos del pokemon deseado, los cuales están guardados en el store.

************NavBar:************ contiene tres elementos, el primero de ellos un icono de una casa que es “PokeDex” este nos regresa a la página principal en el caso de que nos encontremos en otra ruta.

Contacto: despliega un modal donde se muestra mi información de contacto.

Sobre mí - Foto de perfil: se muestra un modal donde se muestra una pequeña información sobre mi persona.

**************Helper:************** se creó un solo helper el que mantiene la configuración de las variables de entorno y para saber como vamos a ejecutar la app de modo ************local************ o en **********************producción.**********************

La variable a modificar este comportamiento tiene el nombre de **VITE_API_URL,** esta por defecto para ser ejecutada de modo local.

 **Api**

****************pokemonsApi.js:**************** archivo de configuración donde se nos es fácil modificar la dirección desde donde se van a consumir los datos. En este archivo hacemos uso de **************Axios,************** para crear la base desde donde se consumirán los datos.

************Assets************

Aquí se encuentran los archivos multimedia que se van a utilizar de manera local.

## **Despliegue 📦**

La aplicación fue desplegada en heroku tanto el frontend como el backend, la puedes ver en esta dirección:

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Construido con 🛠️**

Para la parte estética de la aplicación utilicé **tailwind** junto con ****daisyUI**** 

- **[React](https://reactjs.org/)** - librería para frontend
- **[tailwind](https://tailwindcss.com/) -** framework de CSS
- **[daisyUI](https://daisyui.com/) -** libreria de componentes trabajados con tailwind.
- **[Vite](https://vitejs.dev/)** - herramienta de front para crear proyectos con librerias.
- **[Node](https://nodejs.org/en/)** - entorno en tiempo de ejecución.

