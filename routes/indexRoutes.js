const express = require("express");
const router = express.Router(); 
const {renderIndex, renderLogin, renderCart, renderDetalle, renderRegister, registrarProducto, renderProductos, borrarProducto, renderProductosId, actualizarProducto} = require ("../controller/indexController")
const {validateProducto, validateActualizacion} = require("../middleware/validateProducto")


router.get("/", renderIndex);
router.get("/login", renderLogin);
router.get("/cart", renderCart);
router.get("/detalle", renderDetalle);
router.get("/register", renderRegister);
router.post("/productos", validateProducto, registrarProducto);
router.get("/productos", renderProductos);
router.get("/productos/:id", renderProductosId); //NO ME SALE. Ver controller.
router.delete("/productos/:id", borrarProducto);
router.put("/productos/:id", validateActualizacion, actualizarProducto)


module.exports = router
