import { useState } from 'react';
import { recetas } from './data/recetas';
import FiltroCategoria from './components/FiltroCategoria';
import ListaRecetas from './components/ListaRecetas';

// Límite de longitud máximo para el campo de búsqueda (Desarrollo seguro)
const MAX_BUSQUEDA = 50;

function App() {
  // ===============================================
  // ESTADOS CON useState (Criterio 3.1.2)
  // ===============================================
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  // ===============================================
  // MANEJO CONTROLADO Y SEGURO DE INPUT
  // ===============================================
  const handleBusquedaChange = (e) => {
    let valor = e.target.value;

    // Validación/Sanitización: limitar el largo de la entrada para evitar sobrecargas
    if (valor.length > MAX_BUSQUEDA) {
      valor = valor.slice(0, MAX_BUSQUEDA);
    }

    setBusqueda(valor);
  };

  // ===============================================
  // LÓGICA DE FILTRADO Y NORMALIZACIÓN
  // ===============================================
  const recetasFiltradas = recetas.filter((receta) => {
    // 1. Filtro por categoría
    const cumpleCategoria =
      categoriaSel === 'Todas' || receta.categoria === categoriaSel;

    // 2. Filtro por nombre (Normalización: trim y toLowerCase)
    const textoNormalizado = busqueda.trim().toLowerCase();
    const cumpleNombre =
      textoNormalizado === '' ||
      receta.nombre.toLowerCase().includes(textoNormalizado);

    return cumpleCategoria && cumpleNombre;
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>🍳 RecetApp</h1>
        <p style={{ color: '#7f8c8d', marginTop: 0 }}>
          Recetario Digital Interactivo — INACAP
        </p>
      </header>

      {/* Sección de Controles y Filtros */}
      <section style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#333' }}>Filtros de Búsqueda</h3>
        
        {/* Componente de Filtro por Categoría */}
        <FiltroCategoria
          categoriaSeleccionada={categoriaSel}
          onSeleccionarCategoria={setCategoriaSel}
        />

        {/* Input Controlado de Búsqueda por Nombre (Desarrollo seguro) */}
        <div>
          <input
            type="text"
            placeholder="🔍 Buscar por nombre de receta..."
            value={busqueda}
            onChange={handleBusquedaChange}
            maxLength={MAX_BUSQUEDA}
            autoComplete="off"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </section>

      {/* Resultados e Info */}
      <main>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Mostrando <strong>{recetasFiltradas.length}</strong> de <strong>{recetas.length}</strong> recetas
        </p>

        {/* Renderizado de la Lista Filtrada */}
        <ListaRecetas recetas={recetasFiltradas} />
      </main>
    </div>
  );
}

export default App;