import PropTypes from 'prop-types';

// Configuración visual de colores según la categoría (Entrada, Fondo, Postre)
const coloresPorCategoria = {
  Entrada: { fondo: '#e8f5e9', borde: '#4caf50', badge: '#2e7d32' },
  Fondo:   { fondo: '#fff3e0', borde: '#ff9800', badge: '#e65100' },
  Postre:  { fondo: '#fce4ec', borde: '#e91e63', badge: '#c2185b' }
};

function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  // Obtenemos los colores según la categoría (con fallback seguro por si falta o difiere)
  const colores = coloresPorCategoria[categoria] || { fondo: '#f5f5f5', borde: '#9e9e9e', badge: '#616161' };

  return (
    <div
      className="receta-card"
      style={{
        backgroundColor: colores.fondo,
        borderLeft: `5px solid ${colores.borde}`,
        padding: '1.25rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* Encabezado con Nombre y Etiquetas de Categoría / Vegetariana */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h3 style={{ margin: 0, color: '#333' }}>{nombre}</h3>
        <div>
          <span
            style={{
              backgroundColor: colores.badge,
              color: '#fff',
              padding: '0.25rem 0.6rem',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              marginRight: '0.4rem'
            }}
          >
            {categoria}
          </span>
          {esVegetariana && (
            <span
              style={{
                backgroundColor: '#2e7d32',
                color: '#fff',
                padding: '0.25rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}
            >
              🌱 VEG
            </span>
          )}
        </div>
      </div>

      {/* Origen y Porciones */}
      <p style={{ margin: '0.25rem 0', color: '#666', fontSize: '0.9rem' }}>
        📍 <strong>Origen:</strong> {origen} | 🍽️ <strong>Porciones:</strong> {porciones}
      </p>

      {/* Descripción (Renderizado seguro sin dangerouslySetInnerHTML) */}
      <p style={{ margin: '0.75rem 0', color: '#444' }}>{descripcion}</p>

      {/* Lista de Ingredientes */}
      <div>
        <strong style={{ fontSize: '0.9rem', color: '#333' }}>Ingredientes:</strong>
        <ul style={{ marginTop: '0.25rem', paddingLeft: '1.2rem', color: '#555' }}>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ====================================================
// VALIDACIÓN DE PROPS CON PropTypes (Criterio 3.1.2)
// ====================================================
RecetaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  origen: PropTypes.string.isRequired,
  porciones: PropTypes.number.isRequired,
  categoria: PropTypes.oneOf(['Entrada', 'Fondo', 'Postre']).isRequired,
  descripcion: PropTypes.string.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
  esVegetariana: PropTypes.bool.isRequired
};

// Valores por defecto para evitar errores si falta algún dato (Desarrollo seguro)
RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Desconocido',
  porciones: 1,
  categoria: 'Entrada',
  descripcion: 'Sin descripción disponible.',
  ingredientes: [],
  esVegetariana: false
};

export default RecetaCard;
