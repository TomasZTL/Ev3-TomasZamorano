import PropTypes from 'prop-types';
import RecetaCard from './RecetaCard';

function ListaRecetas({ recetas }) {
  // Renderizado condicional: si el arreglo está vacío, mostramos un mensaje informativo
  if (!recetas || recetas.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
        <p>🔍 No hay recetas que coincidan con los criterios seleccionados.</p>
      </div>
    );
  }

  return (
    <div className="lista-recetas" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id} // Requisito clave: asignación de id único como key
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
          esVegetariana={receta.esVegetariana}
        />
      ))}
    </div>
  );
}

// Validación del tipo de prop (Criterio 3.1.2)
ListaRecetas.propTypes = {
  recetas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      origen: PropTypes.string.isRequired,
      porciones: PropTypes.number.isRequired,
      categoria: PropTypes.oneOf(['Entrada', 'Fondo', 'Postre']).isRequired,
      descripcion: PropTypes.string.isRequired,
      ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
      esVegetariana: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default ListaRecetas;
