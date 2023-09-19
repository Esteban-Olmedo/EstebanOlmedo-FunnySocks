const fs = require("fs");


const readProducts = () => {
    const productos = fs.readFileSync("products.json");
    return JSON.parse(productos);
}

const saveProducts = (productos) => {
    const productosString = JSON.stringify(productos, null, 2)
    fs.writeFileSync("products.json", productosString, "utf-8")
}

module.exports = { readProducts, saveProducts }