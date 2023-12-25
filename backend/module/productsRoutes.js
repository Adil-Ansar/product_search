const productsRoutes = require("express").Router();

const basePath = "/products";

const { getProducts } = require("./productHandler");

productsRoutes.get("/getproducts", getProducts);

module.exports = {
    productsRoutes,
    basePath
};
