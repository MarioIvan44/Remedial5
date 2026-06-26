/**
 * fields: 
 * clientId
 * orderDate
 * sparePart
 * total
 * status

 */

const ordersController = {};

import ordersModel from "../models/orders.js";

//SELECT
ordersController.getOrders = async (req, res) => {
  try {
    const orders = await ordersModel
      .find()
      .populate("clientId", "name email phone"); //Populate the clientId field with the name, email and phone fields from the Users collection

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ message: "Error fetching orders" });
  }
};

//SELECT BY ID
ordersController.getOrderById = async (req, res) => {
  try {
    const order = await ordersModel
      .findById(req.params.id)
      .populate("clientId", "name email phone"); //Populate the clientId field with the name, email and phone fields from the Users collection
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return res.status(500).json({ message: "Error fetching order" });
  }
};

//INSERT
ordersController.createOrder = async (req, res) => {
  try {
    const { clientId, orderDate, sparePart, total, status } = req.body;
    const newOrder = new ordersModel({
      clientId,
      orderDate,
      sparePart,
      total,
      status,
    });
    await newOrder.save();
    return res.status(201).json({ message: "Order save" });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Error creating order" });
  }
};

//UPDATE
ordersController.updateOrder = async (req, res) => {
  try {
    const { clientId, orderDate, sparePart, total, status } = req.body; 
    await ordersModel.findByIdAndUpdate(
      req.params.id,
      {
        
        clientId,
        orderDate,
        sparePart,
        total,
        status,
      },
      { new: true },
    );

    return res.status(200).json({ message: "Order updated" });
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({ message: "Error updating order" });
  }
};

//DELETE
ordersController.deleteOrder = async (req, res) => {
  try {
    const deleted = await ordersModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ message: "Error deleting order" });
  }
};

export default ordersController;
