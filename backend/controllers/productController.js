const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const apiFeatures = require("../utils/apiFeatures")

// Create Product --- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const product = await Product.create(req.body); // Assuming the product details are sent in req.body
    res.status(201).json({
        success: true,
        product
    });
});



// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    // return next(new ErrorHandler("this is my temp error", 500))
    // Set the results per page (for pagination)
    const resultsPerPage = 8;
    const productsCount = await Product.countDocuments();

    // Create an instance of apiFeatures to apply search, filter, and pagination
    const features = new apiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultsPerPage);  // Pass the results per page for pagination

    // Await the query with all applied features (search, filter, pagination)
    const products = await features.query;

    // Return the products in the response
    res.status(200).json({
        success: true,
        products,
        productsCount
    });
});



// Get Product details 
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id; // Get the product ID from the request parameters
    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404)); // Proper error handling
    }

    res.status(200).json({
        success: true,
        product
    });
});

// Update Product -- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id;
    let product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product
    });
});

// Delete Product -- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
});




// Create or Update a Review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    // Validate input
    if (!productId) {
        return next(new ErrorHandler("Product ID is required", 400));
    }

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // Check if the user has already reviewed this product
    const existingReview = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (existingReview) {
        // Update the existing review
        existingReview.rating = rating;
        existingReview.comment = comment;
    } else {
        // Add the new review
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    // Calculate the new average rating
    product.ratings =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

    // Save the product with the new or updated review
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: existingReview ? "Review updated successfully" : "Review added successfully",
    });
});



// Get all reviews of a product
exports.getAllProductReviews = catchAsyncErrors(async (req, res, next) => {
    const productId = req.params.id;  // The product ID should be provided in the request URL

    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if product exists
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // Respond with all reviews of the product
    res.status(200).json({
        success: true,
        reviews: product.reviews
    });
});



// Delete a review of a product
exports.deleteProductReview = catchAsyncErrors(async (req, res, next) => {
    const { productId, reviewId } = req.params;

    // Find the product by ID
    const product = await Product.findById(productId);

    // Check if product exists
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // Find the index of the review to delete
    const reviewIndex = product.reviews.findIndex(
        (review) => review._id.toString() === reviewId
    );

    if (reviewIndex === -1) {
        return next(new ErrorHandler("Review not found", 404));
    }

    // Remove the review from the reviews array
    product.reviews.splice(reviewIndex, 1);

    // Update the product's rating and review count
    product.numberOfReview = product.reviews.length;
    product.rataing =
        product.reviews.reduce((acc, item) => item.rataing + acc, 0) /
        (product.numberOfReview || 1);

    // Save the product with updated reviews
    await product.save();

    res.status(200).json({
        success: true,
        message: "Review deleted successfully",
    });
});