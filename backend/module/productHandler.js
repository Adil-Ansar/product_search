const { products } = require("../db/products");
const fs = require('fs')

const getProducts = async(req, res) => {
    try {
        return res.json({
            meta: { msg: "Products data found", status: true},
            data: products
        });
    } catch (error) {
        return res.json({
            meta: { msg: "Something went wrong", status: false},
            data: error.msg
        });
    }
};

module.exports = {
    getProducts
}
