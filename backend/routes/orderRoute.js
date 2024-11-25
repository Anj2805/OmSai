const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
} = require("../controllers/orderController");

// Route for creating a new order
router.route("/order/new").post(isAuthenticatedUser, newOrder);

// Route for getting a single order by ID (user/admin)
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

// Route for getting all orders placed by a user (user only)
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// Route for getting all orders (admin only)
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

// Route for updating order status (admin only)
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);

// Route for deleting an order (admin only)
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
