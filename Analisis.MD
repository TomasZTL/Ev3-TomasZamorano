 Identificación de elementos del framework

Componente
¿Donde se utiliza este problema?
En RecetaCard.JSX
ListaRecetas.JSX 
Filtrocategoria.JSX
¿Por qué es adecuado?
Esto nos permite modulizar la interfaz en piezas independientes y reutilizables, al separar responsabilidades (como la de la tarjeta visual, parrilla de contenido, controles de filtro)
JSX
¿Donde se utiliza este problema?
En todos los compomentes (recetacard, listarecetas y filtrocategoria) y en App.JSX
¿Por qué es adecuado?
Nos permite escribir la estructura visual HTML, directamente dentro de JS combinando la lógica de filtrado y marcado de manera declarativa.


Props
¿Donde se utiliza este problema?
Se utiliza para pasar datos desde App.jsx hacia ListaRecetas y hacia RecetaCard (nombre, origen, porciones,etc)
¿Por qué es adecuado?
Este es adecuado ya que nos permite una comunicación unidireccional de datos de padre a hijo sin necesidad de modificar la fuente original, garantizandonos un flujo predecible.



Estado (UseState)
¿Donde se utiliza este problema?
Este se utiliza en App.JSX para pode almacenar el filtro de categoria seleccionado y el texto de busqueda ingresado por el usuario.
¿Por qué es adecuado?
Nos permite que react re-renderice de manera dinamica la interfaz en tiempo real cuando nosotros hacemos clic en una categoría o escribimos en el campo de busqueda

Renderizado condicional
¿Donde se utiliza este problema?
Este se utiliza para mostrar el mensaje "No hay recetas que coincidan" si el filtro queda vacío y para activar el distintivo vegetariano.
¿Por qué es adecuado?
Es adecuado para evitar mostrar pantallaes en blanco o datos erróneos, adaptando la inferfaz según el estado actual de los datos que se presentan.

Renderizado de listas (.map + key)
 ¿Dónde se utiliza? En ListaRecetas.jsx para recorrer el arreglo de recetas filtradas y generar un RecetaCard por cada una. 
 ¿Por qué es adecuado? .map() nos permite transformar datos en elementos JSX de forma dinámica, y key={receta.id} le permite a React identificar eficientemente qué ítems cambian o se eliminan al filtrar.



2.Preguntas 

¿Qué ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?
Dividir la app en compomentes como RecetaCard, ListaRecetas y FiltroCategoria hace que el codigo sea legible, mantenible y reusable. Nos permite tambien aislar responsabilidades, si ocurre un fallo en la presentacion de una tarjeta, solo se revisa RecetaCard.jsx sin afectar la lógica global de filtros en App.jsx. Además, nos simplifica el trabajo colaborativo y permite que el sistema sea escalable.


¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
Los props son inmutables y se pasan de un componente padre a un hijo (Ej el prop "nombre="tiramisu"" que ListaRecetas envía a RecetaCard). El hijo solo las lee, en cambio, el estado es mutable, vive dentro de el otro compomente y cambia por interacciones del usuario.
Como por ejemplo const[categoriaSel, setCategoriaSel] = useState("Todas") en app.jsx que actualiza al pulsar los botones del filtro.