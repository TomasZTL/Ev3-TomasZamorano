// src/data/recetas.js
const recetas = [
  {
    id: 1,
    nombre: "Empanadas de Pino",
    origen: "Chile",
    porciones: 12,
    categoria: "Entrada",
    descripcion: "Empanadas horneadas rellenas de carne, cebolla, huevo y aceituna, típicas de las fiestas patrias chilenas.",
    ingredientes: ["harina", "carne molida", "cebolla", "huevo duro", "aceitunas", "pasas"],
    esVegetariana: false
  },
  {
    id: 2,
    nombre: "Ceviche Clásico",
    origen: "Perú",
    porciones: 4,
    categoria: "Entrada",
    descripcion: "Pescado fresco marinado en jugo de limón con cebolla morada, ají y cilantro.",
    ingredientes: ["pescado blanco", "limón", "cebolla morada", "ají limo", "cilantro", "camote"],
    esVegetariana: false
  },
  {
    id: 3,
    nombre: "Bruschetta Caprese",
    origen: "Italia",
    porciones: 6,
    categoria: "Entrada",
    descripcion: "Pan tostado con tomate fresco, mozzarella, albahaca y un toque de aceite de oliva.",
    ingredientes: ["pan ciabatta", "tomate", "mozzarella fresca", "albahaca", "aceite de oliva"],
    esVegetariana: true
  },
  {
    id: 4,
    nombre: "Guacamole Tradicional",
    origen: "México",
    porciones: 4,
    categoria: "Entrada",
    descripcion: "Aguacate machacado con limón, cilantro, cebolla, tomate y chile serrano.",
    ingredientes: ["aguacate", "limón", "cilantro", "cebolla", "tomate", "chile serrano"],
    esVegetariana: true
  },
  {
    id: 5,
    nombre: "Pastel de Choclo",
    origen: "Chile",
    porciones: 8,
    categoria: "Fondo",
    descripcion: "Preparación horneada con base de pino y cubierta de pasta de choclo molido.",
    ingredientes: ["choclo", "carne molida", "cebolla", "pollo", "huevo duro", "aceitunas"],
    esVegetariana: false
  },
  {
    id: 6,
    nombre: "Tacos al Pastor",
    origen: "México",
    porciones: 4,
    categoria: "Fondo",
    descripcion: "Tortillas de maíz rellenas con carne de cerdo adobada, piña, cebolla y cilantro.",
    ingredientes: ["tortillas de maíz", "cerdo", "piña", "cebolla", "cilantro", "salsa verde"],
    esVegetariana: false
  },
  {
    id: 7,
    nombre: "Risotto de Hongos",
    origen: "Italia",
    porciones: 4,
    categoria: "Fondo",
    descripcion: "Arroz cremoso cocinado lentamente con hongos variados, parmesano y vino blanco.",
    ingredientes: ["arroz arborio", "hongos", "parmesano", "vino blanco", "caldo de verduras", "mantequilla"],
    esVegetariana: true
  },
  {
    id: 8,
    nombre: "Curry Verde Tailandés",
    origen: "Tailandia",
    porciones: 4,
    categoria: "Fondo",
    descripcion: "Curry cremoso con leche de coco, vegetales frescos y pasta de curry verde.",
    ingredientes: ["leche de coco", "pasta de curry verde", "tofu", "berenjena", "albahaca tailandesa", "arroz jazmín"],
    esVegetariana: true
  },
  {
    id: 9,
    nombre: "Tiramisú",
    origen: "Italia",
    porciones: 8,
    categoria: "Postre",
    descripcion: "Postre italiano de capas de bizcocho embebido en café, crema de mascarpone y cacao.",
    ingredientes: ["mascarpone", "café espresso", "bizcochos", "huevos", "azúcar", "cacao en polvo"],
    esVegetariana: true
  },
  {
    id: 10,
    nombre: "Tres Leches",
    origen: "Nicaragua",
    porciones: 12,
    categoria: "Postre",
    descripcion: "Bizcocho esponjoso empapado en mezcla de leche condensada, evaporada y crema.",
    ingredientes: ["harina", "huevos", "leche condensada", "leche evaporada", "crema de leche", "vainilla"],
    esVegetariana: true
  },
  {
    id: 11,
    nombre: "Alfajores de Maicena",
    origen: "Argentina",
    porciones: 20,
    categoria: "Postre",
    descripcion: "Galletas suaves de maicena rellenas de dulce de leche y cubiertas con coco rallado.",
    ingredientes: ["maicena", "harina", "mantequilla", "dulce de leche", "coco rallado", "azúcar impalpable"],
    esVegetariana: true
  },
  {
    id: 12,
    nombre: "Flan de Caramelo",
    origen: "España",
    porciones: 6,
    categoria: "Postre",
    descripcion: "Postre cremoso a base de huevos, leche y caramelo, cocinado a baño maría.",
    ingredientes: ["huevos", "leche", "azúcar", "vainilla", "caramelo"],
    esVegetariana: true
  }
];

export default recetas;