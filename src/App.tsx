import ArtistaCard from "./components/ArtistaCard";

function App() {
  const miArtista ={
    nombre: "Digital Master",
    estilo: "Low Poly",
    seguidores: 50000,
    web: "https://miweb.com"
  }

  const handleUpdate = (datosActualizados: any) => {
    console.log("Datos a actualizar en la API:", datosActualizados);
    alert(`Actualización solicitada para ${miArtista.nombre}. Revisar la consola.`);
  };

  return (
    <>
    <h1>Blog de Arte Digital: Tipado de Componentes</h1>
    <ArtistaCard
      artista={miArtista}
      onUpdate={handleUpdate}
    />
    </>
  );
}

export default App;