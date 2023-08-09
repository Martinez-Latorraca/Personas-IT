Antes de ejecutar la app: 

    * Despues de clonar el repo, hay que ejecutar el comando npm install para instalar la carpeta node_modules.
   
    * Luego, crear el archivo .env y agregar la variable de entorno VITE_API_KEY como se ve en el archivo .env.example 
    y agregar su api key de https://api.openweathermap.org .

    * Para finalizar, ejecutar el comando npm run dev para ejecutar la app. 

Ejercicios:

    * El desafio 3 se pueden ver los archivos SQL y las imagenes en la carpeta llamada Desafio 3 en el src de la app. 

    * Para los ejercicios del desafio 4 elegi realizarlos en React porque es el framework que mas domino. Cree una web app que contiene todos los ejercicios separados 
    en cards. Cada uno esta desarrollado en un componente independiente. Utilice CSS vanila para el diseño. 

    * En el ejercicio 1 lo que se hizo fue crear una funcion BuscarValo para que obtuviera una lista de numeros "list" y un valor "value" y devolver 
    la posicion (index) en la lista del valor. 
    Primero convertimos la lista de numeros en un array para luego retornar el indexOf del valor. En caso de que se encuentre el valor en la lista, 
    se devuelve el index, de lo contrario se devuelve -1.

    * Para el ejercicio 2, cree un array con capitales de Latam, y mediante un useEffect se hace una llamada axios a la api de http://api.openweathermap.org/geo,
    por cada capital, primero para obtener las coordenadas de la ciudad y con esos datos, se vuelve a hacer otra llamada axios a http://api.openweathermap.org/data, 
    para obtener los datos climaticos. 
    Finalmente, se utilizo la libreria [csv-react](https://www.npmjs.com/package/react-csv) que sirve para poder descargar datos en formato CSV, se le pasa por 
    parametros los datos y la libreria lo convierte a un archivo CSV y genera un link para descargarlo. Esta libreria tiene una propiedad para modificar el separador
    en este caso se utilizo el ";". 

    * En el ejercicio 3 se creo un form para obtener un ciudad o una lista de ciudades, se crea un array y por cada ciudad se hacen 2 llamadas axios, una para obtener 
    las coordenadas y la segunda para obtener los datos climaticos. Se guardan en un array por cada vuelta de for y luego se actualiza el state de la data para asi 
    mostrar los datos en cards debajo del boton de buscar. 
