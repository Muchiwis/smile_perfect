import "../App.css";
import NavbarFinal from "../componentes/Navegacion";
import PortadaFinal from "../componentes/Portada";
export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col min-h-screen">
        <div className="basis-1/12 relative z-20">
          <NavbarFinal />
        </div>
        <div className="flex-grow bg-gray-200 relative overflow-hidden">
          <PortadaFinal />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex basis-10/12">
          <h1>Servicio</h1>
        </div>
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
