export const BotonFijo = ({ className = "" }) => {
  return (
    <button
      className={`bg-gradient-to-r from-verdeBase-300 via-verdeBase-400 to-verdeBase-500 px-14 rounded-xl text-2xl font-normal text-white animate-pulse hover:animate-none ${className}`}
    >
      Reservar Cita
    </button>
  );
};

export const BotonMovilTablet = ({ className }) => {
  return (
    <button
      className={`absolute bg-gradient-to-r from-verdeBase-300 via-verdeBase-400 to-verdeBase-500 px-14 py-5 rounded-xl text-2xl font-normal text-white animate-pulse hover:animate-none ${className} `}
    >
      Reservar cita
    </button>
  );
};

export const TextoIntro = ({ className = "" }) => {
  return (
    <h1 className={`w-11/12 ${className}`}>
      Una <span className="text-verdeBase font-semibold">sonrisa</span> sana es
      una
      <span className="text-verdeBase font-semibold"> sonrisa </span>
      feliz.
    </h1>
  );
};

export const ParrafoEscritorio = ({ className, classSpan }) => {
  return (
    <p className={`text-black font-light text-center p-2 px-3  ${className}`}>
      <span className={`text-black-900 font-bold ${classSpan}`}>"</span>
      Ofrecemos tratamientos dentales de alta calidad para mantener tu sonrisa
      saludable y radiante. Nuestro equipo está comprometido con tu bienestar
      dental y tu satisfacción.
      <span className={`text-black-900 font-bold ${classSpan}`}>"</span>
    </p>
  );
};
export const ParrafoMovil = ({ className }) => {
  return (
    <p
      className={`absolute transform -translate-x-1/2 w-11/12 text-black font-light bg-verdeBase-50 bg-opacity-60 text-center p-2 rounded-xl text-3xl px-3 leading-10 ${className}`}
    >
      <span className="text-black-900 text-4xl font-bold">"</span>
      Ofrecemos tratamientos dentales de alta calidad para mantener tu sonrisa
      saludable y radiante. Nuestro equipo está comprometido con tu bienestar
      dental y tu satisfacción.
      <span className="text-black-900 text-4xl font-bold">"</span>
    </p>
  );
};
