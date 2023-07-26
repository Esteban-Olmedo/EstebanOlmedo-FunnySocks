CREATE DATABASE IF NOT EXISTS db_ecommerce;
USE db_ecommerce;

CREATE TABLE IF NOT EXISTS productos(
id_producto INT AUTO_INCREMENT,
nombre VARCHAR(255),
precio DECIMAL(5,2),
talle VARCHAR(255),
PRIMARY KEY (id_producto)
);

CREATE TABLE IF NOT EXISTS usuarios(
id_usuario INT AUTO_INCREMENT,
nombre_completo VARCHAR(255),
email VARCHAR(255),
PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS categorias (
id_categoria INT AUTO_INCREMENT,
nombre_categoria VARCHAR(255),
PRIMARY KEY (id_categoria)
);

INSERT INTO productos (
nombre, precio, talle) VALUES
("medias pokemon", 500.00, "S"),
("soquetes con rayas", 400.00, "M"),
("medias pizza", 600.00, "L"),
("soquetes sailor moon", 400.00, "M"),
("medias largas lisas", 700.00, "L");

INSERT INTO usuarios (
nombre_completo, email) VALUES
("esteban olmedo", "tebi15@hotmail.com"),
("matias camisay", "matiascamisay@gmail.com");

INSERT INTO categorias (
nombre_categoria) VALUES
("lisas"),
("dibujos"),
("estampadas");

#SELECT * FROM productos;
#SELECT * FROM categorias;

ALTER TABLE productos
ADD COLUMN id_cat INT,
ADD FOREIGN KEY (id_cat) REFERENCES categorias(id_categoria);


UPDATE productos SET id_cat = 1 WHERE id_producto IN (1);
SELECT id_producto,nombre,precio,talle,id_cat,nombre_categoria FROM productos INNER JOIN categorias ON productos.id_cat=categorias.id_categoria;
