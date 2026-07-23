import { recetas } from './data/recetas';

function App() {
  console.log('Recetas precargadas:', recetas);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>RecetApp — Proyecto Base</h1>
      <p>Total de recetas cargadas: <strong>{recetas.length}</strong></p>
      <ul>
        {recetas.map(receta => (
          <li key={receta.id}>
            {receta.nombre} — <em>{receta.categoria}</em> ({receta.origen})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
