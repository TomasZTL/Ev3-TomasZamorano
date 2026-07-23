# 🍳 RecetApp — Recetario Digital Interactivo
Tomás Zamorano 
recetapp-react
Programacion Front End.


El objetivo:Desarrollar una aplicación web interactiva SPA en React para un taller de cocina que reemplaza el recetario impreso tradicional. La app permite visualizar 12 recetas precargadas, filtrarlas por categoría (Entrada, Fondo, Postre), buscarlas por nombre en tiempo real y destacar visualmente las opciones vegetarianas con un contador.

Lo que hizo:
Estructura de Componentes
src/data/recetas.js: Archivo local con el arreglo de 12 recetas precargadas con sus atributos (id, nombre, origen, porciones, categoría, descripción, ingredientes y estado vegetariano).
RecetaCard.jsx: Componente que renderiza cada tarjeta individual con estilos por categoría (Entrada en verde, Fondo en naranja, Postre en rosa) y el distintivo VEG.
ListaRecetas.jsx: Recorre el arreglo de recetas mediante .map() asignando la prop de optimización key={receta.id} y manejando el renderizado condicional si no hay coincidencia.
FiltroCategoria.jsx: Barra con botones interactivos para seleccionar la categoría deseada.
App.jsx: Componente principal que gestiona el estado global con useState (categoría activa y texto de búsqueda), aplica la normalización de texto y calcula el contador de recetas vegetarianas.


Buenas Prácticas de Desarrollo Seguro Aplicadas
Input Controlado y Sanitización: El campo de búsqueda recorta espacios (.trim()), convierte a minúsculas (.toLowerCase()) y limita la longitud a 50 caracteres (maxLength).
Validación con PropTypes y defaultProps: Todos los componentes cuentan con validación estricta de tipos de datos y valores por defecto para prevenir errores en runtime.
Seguridad JSX: Renderizado declarativo nativo sin el uso de dangerouslySetInnerHTML ni claves expuestas.