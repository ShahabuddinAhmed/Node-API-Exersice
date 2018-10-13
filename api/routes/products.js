const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id == 'spatial') {
        res.status(200).json({
            message: 'You discover the spatial ID',
            id: id
        });
    } else {
         res.status(200).json({
            message: 'You pass an ID',
            id: id
         });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: "You are Updated"
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: "You are Deleted"
    });
});

module.exports = router;