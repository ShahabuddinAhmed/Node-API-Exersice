const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require('../models/product');

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /products"
    });
});

router.post("/", (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POST request to /products",
        Product: product
    });
});

router.get("/:productID", (req, res, next) => {
    const id = req.params.productID;
    if(id == "spatial") {
        res.status(200).json({
            message: "You discover the spatial ID",
            id: id
        });
    } else {
         res.status(200).json({
            message: "You pass an ID",
            id: id
         });
    }
});

router.patch("/:productID", (req, res, next) => {
    const id = req.params.productID;
    res.status(200).json({
        message: "You are Updated",
        id: id
    });
});

router.delete("/:productID", (req, res, next) => {
    const id = req.params.productID;
    res.status(200).json({
        message: "You are Deleted",
        id: id
    });
});

module.exports = router;