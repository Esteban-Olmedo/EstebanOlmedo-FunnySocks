const { body, validationResult } = require("express-validator");

const validateActualizacion = [
    body("id").isNumeric()
    .withMessage("el id tiene que ser un numero"),
    body("nombre").optional(),
    //body("nombre").isString().withMessage("el nombre tiene que ser un string").optional(),
    body("precio").optional(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.send(errors.array)
          return 
        }
        next();
      },
]

const validateProducto = [
body("id").isNumeric()
.withMessage("el id tiene que ser un numero"),
body("nombre").isString()
.withMessage("el nombre tiene que ser un string"),
body("precio").isNumeric()
.withMessage("el precio tiene que ser un numero"),
  
  (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        res.send(errors.array)
      return 
    }
    next();
  },
];

module.exports = {validateProducto, validateActualizacion}