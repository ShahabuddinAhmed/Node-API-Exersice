const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "You are GET ordered"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "You are POST ordered"
    });
});

router.get('/:orderID', (req, res, next) => {
    orderID = req.params.orderID;
    res.status(200).json({
        message: "You  GET with ID ordered",
        ID: orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    orderID = req.params.orderID;
    res.status(200).json({
        message: "You are Deleted with ID ordered",
        ID: orderID,
        ID: orderID
    });
});

module.exports = router;