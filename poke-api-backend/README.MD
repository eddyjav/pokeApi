# Back-end PokeApi

*Para la creaci贸n de esta API y de los enpoint utilic茅 **************************Javascript************************** como lenguaje de desarrollo **************NodeJS************** junto con **Express** y para la persistencia de datos **MongoDB**.*

### Puedes ver la App desplegada en heroku

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Comenzando聽馃殌**

Para ejecutar el proyecto de manera local puedes clonar este repositorio para luego ejecutar

```
npm install
npm run dev
```

El proyecto se ejecuta en [http://localhost:5000](http://localhost:3000/) 

### Proceso de construcci贸n聽**馃敡**

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

Lo primero a configurar es el servidor, para esto nos ayudamos de express es muy eficiente y f谩cil de configurar, para asignar un puerto para el despliegue de la aplicaci贸n utilizamos **variables de entorno,** con el fin de facilitar la modificaci贸n del puerto y evitar tocar o modificar lo menos posible este archivo en futuras ocasiones.

************************************.env:************************************ variables de entorno aqu铆 tenemos designados dos,

**PORT**: para asignar el puerto.

**DB_CONN**: para la direcci贸n de donde est谩 nuestra base de datos.

**************************Base de datos**************************

Para configurar la BDD tenemos la carpeta ************database************ y el archivo **************config.js************** para lograr la conexi贸n entre la app y ****************MongoDB**************** utilizamos el ******************Mongoose****************** el cual es un ODM para de MongoDB. En esta configuraci贸n se asigna la url de conexi贸n de la DB y enviamos un mensaje para saber si la conexi贸n fue exitosa.

******************Mongoose.******************

Para hacer uso de moongose es necesario crear un Schema de nuestra base de datos, este lo tenemos dentro de la carpeta **************models************** en el archivo ******Pokemon.js,****** el Schema descrito es un modelo fiel de como ser谩n representados nuestros documentos en la base de datos de MongoDB.  

**********Rutas**********

Para la configuraci贸n de ruta tenemos una carpeta con el nombre de ****************routes**************** y dentro el archivo de configuraci贸n **********************pokemon.js********************** en este tenemos dos rutas con el m茅todo ********GET******** 

La primera de ellas para obtener un pokemon por su nombre

La segunda para obtener todos los pokemons y realizar una paginaci贸n

**************************Controladores**************************

En la carpeta **********************controller********************** tenemos un archivo de configuraci贸n con el nombre de **********************pokemon.js********************** donde tenemos:

**getPokemonByName:** con este controlador lo que hacemos es extraer el par谩metro **********name********** para realizar una b煤squeda utilizando para esto nuestro modelo. 

****getAllPokemon:**** este controlador no recibe nada como par谩metro, ya que solo regresa todos los pokemons que contiene la BD.

**getPokemonPagination:** este controlador sirve para la obtenci贸n de todos los pokemons, pero utilizando para este cometido paginaci贸n, recibe como par谩metro un l铆mite **********limit********** y el salto **********skip********** entre consultas de pokemons, con este controlador la paginaci贸n se la realiza del lado del servidor.

Cada uno de estos controladores regresa en formato **********JSON********** los datos obtenidos de la consulta a la BD.

**********Datos**********

Los datos fueron obtenidos de la p谩gina [https://pokeapi.co/](https://pokeapi.co/) y formateados por mi persona para un mejor manejo de los mismos.

Las im谩genes que se despliegan est谩n contenidas en un campo string como se indic贸 en el archivo gu铆a.

## **Despliegue聽馃摝**

La aplicaci贸n fue desplegada en heroku tanto el frontend como el backend, la puedes ver en esta direcci贸n:

[https://pokeapi-jv.herokuapp.com/](https://pokeapi-jv.herokuapp.com/)

## **Construido con聽馃洜锔?**

- **[Node](https://nodejs.org/en/)** - entorno en tiempo de ejecuci贸n.
- **[MongoDB](https://www.mongodb.com/)** - base de datos NoSql.
- **[Mongoose](https://mongoosejs.com/)** - librer铆a para escribir consultas a MongoDB
