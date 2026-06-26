import express from "express"
import usersController from "../controllers/users.js";
import { validateAuthCookie } from "../middlewares/authMiddleware.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint

const router = express.Router();

//(api/users/)
router.route("/")
.get(usersController.getUsers)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/users/:id)
router.route("/:id")
.put( usersController.updateUser)
.delete( usersController.deleteUser)
.get( usersController.getUserById)

export default router;