import NavbarFinal from "../componentes/Navegacion";

export default function Contactos() {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-screen">
        <div className="basis-1/12">
          <NavbarFinal />
        </div>
        <div className="basis-11/12 bg-gray-200 flex justify-center items-center">
          <h1>CONTACTOS</h1>
        </div>
      </div>
    </div>
  );
}
