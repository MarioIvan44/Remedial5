import app from "./app.js";
import "./database.js";

//Creo la función
//Que se encarga de ejecutar el servidor

//Utilizo un bloque try-catch para manejar cualquier error que pueda ocurrir al iniciar el servidor. Si el servidor se inicia correctamente, se muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto 4000. Si ocurre un error, se captura y se muestra un mensaje de error en la consola con los detalles del error.
async function main() {
  try {
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
    
    //Todo funciona
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

//Llamo a la función main para iniciar el servidor
main();
