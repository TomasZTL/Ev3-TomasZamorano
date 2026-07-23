import { recetas } from './data/recetas';
import ListaRecetas from './components/ListaRecetas';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2c3e50' }}>🍳 RecetApp</h1>
        <p style={{ color: '#7f8c8d' }}>Recetario Digital Interactivo — INACAP</p>
      </header>

      <main>
        <ListaRecetas recetas={recetas} />
      </main>
    </div>
  );
}

export default App;