const express = require("express");
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")
// app.use(express.static("public"));
app.use(express.urlencoded({ entended: true}))
app.use(express.json())
// app.use(cookieParser());

app.use("/", require ("./routes/indexRoutes.js"));

// app.get("/", (req, res) => {
//     res.send("pagina principal")
// });

// app.get("/cart", (req, res) => {
//     res.send("carrito")
// });

// app.get("/detalle", (req, res) => {
//     res.send("detalle de producto")
// });

// app.get("/login", (req, res) => {
//     res.send("iniciar sesion")
// });

// app.get("/register", (req, res) => {
//     res.send("registrarse")
// });




app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`); 
})
