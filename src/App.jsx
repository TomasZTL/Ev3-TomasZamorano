import recetas from './data/recetas';

function App() {
  console.log(recetas);
  return (
    <div>
      <h1>RecetApp</h1>
      <p>Recetas cargadas: {recetas.length}</p>
    </div>
  );
}

export default App;