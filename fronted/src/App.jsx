function App() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex basis-screen">Navbar</div>
      <div className="flex basis-screen">Componente Home</div>
      <div className="flex justify-center">
        <div className="flex basis-10/12">Servicios</div>
      </div>
      <div className="flex justify-center">
        <div className="flex basis-10/12">Profesionales Especializados</div>
      </div>
      <div className="flex justify-center">
        <div className="flex basis-10/12">Formulario</div>
      </div>
      <div className="lg:bg-red-100 md:bg-red-300 sm:bg-red-500 max-sm:bg-blue-700 flex basis-screen">
        Componente Footer
      </div>
    </div>
  );
}

export default App;
