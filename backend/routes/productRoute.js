const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getAllProductReviews,
    deleteProductReview,

} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

// Route to get all products (GET)
router.route("/").get(getAllProducts);

// Route to create a new product (POST) - Only accessible by admin
router
    .route("/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// Route to get single product details (GET)
router
    .route("/:id")
    .get(getProductDetails);

// Route to update a product (PUT) - Only accessible by admin
router
    .route("/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

// Route to delete a product (DELETE) - Only accessible by admin
router
    .route("/:id")
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);


// Route to Create or Update a Review
router.route('/review').put(isAuthenticatedUser, createProductReview);

//get all product review
router.route('/reviews')
    .put(getAllProductReviews)
    .delete(isAuthenticatedUser, deleteProductReview);


module.exports = router;
