const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

// Define review routes
router.post('/products/:productId/reviews', reviewController.addReview);
router.get('/products/:productId/reviews', reviewController.getAllReviews);
router.put('/products/:productId/reviews/:reviewId', reviewController.updateReview);
router.delete('/products/:productId/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
