# Back-end PokeApi

*Para la creación de esta API y de los enpoint utilicé **************************Javascript************************** como lenguaje de desarrollo **************NodeJS************** junto con **Express** y para la persistencia de datos **MongoDB**.*

### Puedes ver la App desplegada en heroku

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Comenzando 🚀**

Para ejecutar el proyecto de manera local puedes clonar este repositorio para luego ejecutar

```
npm install
npm run dev
```

El proyecto se ejecuta en [http://localhost:5000](http://localhost:3000/) 

### Proceso de construcción **🔧**

La estructura del proyecto es la siguiente

poke-api-backend

- controller
- database
- models
- public
- pages
- routes

El componente principal tiene como nombre **index.js,** el cual contiene todas las configuraciones necesarias para el funcionamiento de la api.

### Configuraciones.

Lo primero a configurar es el servidor, para esto nos ayudamos de express es muy eficiente y fácil de configurar, para asignar un puerto para el despliegue de la aplicación utilizamos **variables de entorno,** con el fin de facilitar la modificación del puerto y evitar tocar o modificar lo menos posible este archivo en futuras ocasiones.

************************************.env:************************************ variables de entorno aquí tenemos designados dos,

**PORT**: para asignar el puerto.

**DB_CONN**: para la dirección de donde está nuestra base de datos.

**************************Base de datos**************************

Para configurar la BDD tenemos la carpeta ************database************ y el archivo **************config.js************** para lograr la conexión entre la app y ****************MongoDB**************** utilizamos el ******************Mongoose****************** el cual es un ODM para de MongoDB. En esta configuración se asigna la url de conexión de la DB y enviamos un mensaje para saber si la conexión fue exitosa.

******************Mongoose.******************

Para hacer uso de moongose es necesario crear un Schema de nuestra base de datos, este lo tenemos dentro de la carpeta **************models************** en el archivo ******Pokemon.js,****** el Schema descrito es un modelo fiel de como serán representados nuestros documentos en la base de datos de MongoDB.  

**********Rutas**********

Para la configuración de ruta tenemos una carpeta con el nombre de ****************routes**************** y dentro el archivo de configuración **********************pokemon.js********************** en este tenemos dos rutas con el método ********GET******** 

La primera de ellas para obtener un pokemon por su nombre

La segunda para obtener todos los pokemons y realizar una paginación

**************************Controladores**************************

En la carpeta **********************controller********************** tenemos un archivo de configuración con el nombre de **********************pokemon.js********************** donde tenemos:

**getPokemonByName:** con este controlador lo que hacemos es extraer el parámetro **********name********** para realizar una búsqueda utilizando para esto nuestro modelo. 

****getAllPokemon:**** este controlador no recibe nada como parámetro, ya que solo regresa todos los pokemons que contiene la BD.

**getPokemonPagination:** este controlador sirve para la obtención de todos los pokemons, pero utilizando para este cometido paginación, recibe como parámetro un límite **********limit********** y el salto **********skip********** entre consultas de pokemons, con este controlador la paginación se la realiza del lado del servidor.

Cada uno de estos controladores regresa en formato **********JSON********** los datos obtenidos de la consulta a la BD.

**********Datos**********

Los datos fueron obtenidos de la página [https://pokeapi.co/](https://pokeapi.co/) y formateados por mi persona para un mejor manejo de los mismos.

Las imágenes que se despliegan están contenidas en un campo string como se indicó en el archivo guía.

## **Despliegue 📦**

La aplicación fue desplegada en heroku tanto el frontend como el backend, la puedes ver en esta dirección:

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Construido con 🛠️**

- **[Node](https://nodejs.org/en/)** - entorno en tiempo de ejecución.
- **[MongoDB](https://www.mongodb.com/)** - base de datos NoSql.
- **[Mongoose](https://mongoosejs.com/)** - librería para escribir consultas a MongoDB
