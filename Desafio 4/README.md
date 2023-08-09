Antes de ejecutar la app: 

    * Después de clonar el repo, hay que ejecutar el comando npm install para instalar la carpeta node_modules.
   
    * Luego, crear el archivo .env y agregar la variable de entorno VITE_API_KEY como se ve en el archivo .env.example 
    y agregar su api key de https://api.openweathermap.org .

    * Para finalizar, ejecutar el comando npm run dev para ejecutar la app. 

Ejercicios:

    * Para los ejercicios del desafío 4 elegí realizarlos en React porque es el framework que mas domino. Cree una web app que contiene todos los ejercicios separados 
    en cards. Cada uno esta desarrollado en un componente independiente. Utilice CSS vanila para el diseño. 

    * En el ejercicio 1 lo que se hizo fue crear una función BuscarValor para que obtuviera una lista de números "list" y un valor "value" y devolver 
    la posición (index) en la lista del valor. 
    Primero convertimos la lista de números en un array para luego retornar el indexOf del valor. En caso de que se encuentre el valor en la lista, 
    se devuelve el index, de lo contrario se devuelve -1.

    * Para el ejercicio 2, cree un array con capitales de Latam, y mediante un useEffect se hace una llamada axios a la api de http://api.openweathermap.org/geo,
    por cada capital, primero para obtener las coordenadas de la ciudad y con esos datos, se vuelve a hacer otra llamada axios a http://api.openweathermap.org/data, 
    para obtener los datos climáticos. 
    Finalmente, se utilizó la librería [csv-react](https://www.npmjs.com/package/react-csv) que sirve para poder descargar datos en formato CSV, se le pasa por 
    parámetros los datos y la librería lo convierte a un archivo CSV y genera un link para descargarlo. Esta librería tiene una propiedad para modificar el separador
    en este caso se utilizó el ";". 

    * En el ejercicio 3 se creó un form para obtener una ciudad o una lista de ciudades, se crea un array y por cada ciudad se hacen 2 llamadas axios, una para obtener 
    las coordenadas y la segunda para obtener los datos climáticos. Se guardan en un array por cada vuelta de for y luego se actualiza el state de la data para así 
    mostrar los datos en cards debajo del botón de buscar. 

