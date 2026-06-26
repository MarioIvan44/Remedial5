import express from "express"
import ordersController from "../controllers/orders.js";
import { validateAuthCookie } from "../middlewares/authMiddleware.js";

//Router() nos ayuda a colocar los métodos que tendrá el endpoint

const router = express.Router();

//(api/orders/)
router.route("/")
.get(ordersController.getOrders)
.post( validateAuthCookie(["admin"]), ordersController.createOrder)

//Definimos los method para el endpoint que includes un parámetro dinámico ":id". Este parámetro se utiliza para identificar un recurso específico, como un producto en este caso. Los métodos PUT y DELETE se utilizan para actualizar y eliminar un recurso específico identificado por su ID, respectivamente. 
//(api/orders/:id)
router.route("/:id")
.put( ordersController.updateOrder)
.delete(validateAuthCookie(["admin"]), ordersController.deleteOrder)
.get( ordersController.getOrderById)

export default router;