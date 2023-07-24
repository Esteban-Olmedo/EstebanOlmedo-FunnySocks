const fs = require("fs");
const { readProducts, saveProducts } = require("../services/productosServices");

const renderIndex = (req, res) => {
    res.render("index")
}

const renderLogin = (req, res) => {
    res.render("login")
}

const renderCart = (req, res) => {
    res.render("cart")
}

const renderDetalle = (req, res) => {
    res.render("detalle")
}

const renderRegister = (req, res) => {
    res.render("register")
}

const registrarProducto = (req, res) => {
    const {body} = req;
    const productos = readProducts();
    productos.push(body);
    saveProducts(productos);
    res.send("producto creado con exito")
    };

const renderProductos = (req, res) => {
    const productos = readProducts();
    res.send(productos);
      };

const borrarProducto = (req, res) => {
    const { id } = req.params;
    const productos = readProducts();
    const productosNuevos = productos.filter((producto) => producto.id !== Number(id));
    saveProducts(productosNuevos);
    res.send(`Producto ${id} eliminado`);
    };

//NO ME SALE
const renderProductosId = (req, res) => {
    const {id} = req.params;
    const productos = readProducts();
    const producto = productos.find((producto) => producto.id === Number(id))
    res.send(producto)
}

const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const nuevosDatos = req.body;
    const productos = readProducts();
    const productosNuevos = productos.map((producto) => {
        if (producto.id === Number(id)) {
            return {
                ...producto,
                ...nuevosDatos,
            }
        }
        return producto;
    });
    saveProducts(productosNuevos);
    res.send(`Producto ${id} actualizado`);
  };

module.exports = {renderIndex, renderLogin, renderCart, renderDetalle, renderRegister, registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto}