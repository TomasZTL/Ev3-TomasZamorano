import PropTypes from 'prop-types';

const CATEGORIAS = ['Todas', 'Entrada', 'Fondo', 'Postre'];

function FiltroCategoria({ categoriaSeleccionada, onSeleccionarCategoria }) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
      {CATEGORIAS.map((cat) => {
        const esActiva = categoriaSeleccionada === cat;
        return (
          <button
            key={cat}
            onClick={() => onSeleccionarCategoria(cat)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: esActiva ? '2px solid #2c3e50' : '1px solid #ccc',
              backgroundColor: esActiva ? '#2c3e50' : '#fff',
              color: esActiva ? '#fff' : '#333',
              fontWeight: esActiva ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

// Validación con PropTypes (Criterio 3.1.2)
FiltroCategoria.propTypes = {
  categoriaSeleccionada: PropTypes.string.isRequired,
  onSeleccionarCategoria: PropTypes.func.isRequired
};

export default FiltroCategoria;
