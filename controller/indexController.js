// const fs = require("fs");
// const { readProducts, saveProducts } = require("../services/productosServices");
const Product = require("../models/index").productos;

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

//CREAR UN PRODUCTO:
const registrarProducto =  async (req, res) => {
    try {
        const {...newProduct } = req.body;
    const {nombre, precio, talle} = newProduct;
    console.log(newProduct);
    if (!nombre || !precio || !talle) {
        return res.status(400).json({ error: "faltan datos"})
    }
    const producto = await Product.create({ nombre, precio, talle})
    res.status(201).json({ message: "producto creado", data: producto})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error en el servidor"})
    }   
};
// const registrarProducto = (req, res) => {
//     const {body} = req;
//     const productos = readProducts();
//     productos.push(body);
//     saveProducts(productos);
//     res.send("producto creado con exito")
//     };

//OBTENER TODOS LOS PRODUCTOS:
    const renderProductos = async (req, res) => {
        const productos = await Product.findAll();
        res.json({data: productos})
    };
// const renderProductos = (req, res) => {
//     const productos = readProducts();
//     res.send(productos);
//       };

//BORRAR UN PRODUCTO:
const borrarProducto = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if(!product) {
        return res.status(404).json ({message: "producto no encontrado"});
    }
    await product.destroy();
    return res.status(200).json({message: "producto eliminado", data: product});
};
// const borrarProducto = (req, res) => {
//     const { id } = req.params;
//     const productos = readProducts();
//     const productosNuevos = productos.filter((producto) => producto.id !== Number(id));
//     saveProducts(productosNuevos);
//     res.send(`Producto ${id} eliminado`);
//     };

//OBTENER UN PRODUCTO:
    const renderProductosId =  async (req, res) => {
        const producto = await Product.findByPk(req.params.id);
        res.json({data: producto})
    };
// const renderProductosId = (req, res) => {
//     const {id} = req.params;
//     const productos = readProducts();
//     const producto = productos.find((producto) => producto.id === Number(id))
//     res.send(producto)
// }

//ACTUALIZAR UN PRODUCTO:
const actualizarProducto =async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    const {...newProduct} = req.body;
    if(!product) {
        return res.status(404).json ({message: "producto no encontrado"});
    }
    await product.update(newProduct);
    return res.status(200).json({message: "producto actualizado", data: product});
};
// const actualizarProducto = (req, res) => {
//     const { id } = req.params;
//     const nuevosDatos = req.body;
//     const productos = readProducts();
//     const productosNuevos = productos.map((producto) => {
//         if (producto.id === Number(id)) {
//             return {
//                 ...producto,
//                 ...nuevosDatos,
//             }
//         }
//         return producto;
//     });
//     saveProducts(productosNuevos);
//     res.send(`Producto ${id} actualizado`);
//   };

module.exports = {renderIndex, renderLogin, renderCart, renderDetalle, renderRegister, registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto}