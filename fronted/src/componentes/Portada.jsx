import imgMovilV from "../assets/img_movilV.webp";
import imgMovilH from "../assets/img_movilH.webp";
import imgTablet from "../assets/img_tablet.webp";
import imgEscritorio from "../assets/img_escritorio.webp";
import imgError from "../assets/img_error.avif";
import "../App.css";
import {
  BotonFijo,
  BotonMovilTablet,
  ParrafoEscritorio,
  ParrafoMovil,
  TextoIntro,
} from "./portadaExport/portadaExport";

export default function PortadaFinal() {
  return (
    <div className="w-full h-full">
      {/* Movil */}
      <div className="absolute top-0 bottom-0 h-full w-full z-10 hide-mobile lg:hidden 2xl:hidden">
        <picture className="">
          <source srcSet={imgMovilV} media="(max-width: 600px)" />
          <source srcSet={imgMovilH} media="(max-width: 1024px)" />
          <img
            src={imgError}
            className="w-full h-full object-cover object-center sm:opacity-90"
            loading="lazy"
            alt="Fondo de paciente tratandose los dientes"
          />
        </picture>
        <h3 className="absolute top-[10%] max-sm:text-4xl left-5 w-8/12 bg-verdeBase-100 bg-opacity-30 leading-tight text-center p-2 rounded-xl sm:w-4/12 sm:text-3xl sm:top-[15%] md:w-4/12 md:text-4xl md:top-[18%]">
          Una <span className="text-white font-semibold">sonrisa</span> sana es
          una
          <span className="text-verdeBase font-semibold"> sonrisa </span>
          feliz.
        </h3>

        <BotonMovilTablet className="top-1/3 left-14 sm:px-8 sm:py-4 sm:left-[8%] sm:top-[45%] md:px-10 md:top-1/2 md:left-[10%]" />
        <ParrafoMovil className="top-[62%] left-1/2 sm:hidden" />
      </div>
      {/* Tablet */}
      <div className="absolute top-0 bottom-0 h-full w-full z-10 hide-tablet max-sm:hidden showtTablet hideHighDesktop 2xl:hidden">
        <picture>
          <source srcSet={imgTablet} media="(max-width: 1024px)" />
          <img
            src={imgError}
            className="w-full h-full object-cover object-center opacity-70"
            loading="lazy"
            alt="Fondo de paciente tratandose la muela"
          />
        </picture>
        <h1 className="absolute top-[10%] left-10 w-6/12 bg-verdeBase-100 bg-opacity-30 leading-tight text-center p-2 rounded-xl">
          Una <span className="text-verdeBase font-semibold">sonrisa</span> sana
          es una
          <span className="text-verdeBase font-semibold"> sonrisa </span>
          feliz.
        </h1>

        <BotonMovilTablet className="top-[30%] left-[11%] px-[10%] text-3xl" />
        <ParrafoMovil className="top-[50%] left-1/2 py-10 text-4xl font-normal" />
      </div>
      {/* Escritorio normal */}
      <div className="2xl:hidden showDesktop beforeDesktopHidden hideHighTablet absolute top-0 bottom-0 h-full w-full z-10">
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-24">
            <TextoIntro className="pt-16" />
            <BotonFijo className="w-6/12 py-5" />
            <ParrafoEscritorio className="w-11/12 pb-20 text-[28px] leading-normal" />
          </div>
          <div className="relative top-0 bottom-0 h-full w-full z-10">
            <picture>
              <source srcSet={imgEscritorio} media="(max-width: 1535px)" />
              <img
                src={imgError}
                className="w-full h-full object-cover object-center opacity-70"
                loading="lazy"
                alt="Imagen de un análisis molar con radiografía"
              />
            </picture>
          </div>
        </div>
      </div>
      {/* Escritorio grande */}
      <div className="hidden 2xl:block absolute top-0 bottom-0 h-full w-full z-10">
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-32">
            <TextoIntro className="text-[56px]" />
            <BotonFijo className="w-5/12 py-8" />
            <ParrafoEscritorio className="w-10/12 text-6xl leading-relaxed" />
          </div>
          <div className="relative top-0 bottom-0 h-full w-full z-10">
            <picture>
              <source srcSet={imgEscritorio} media="(max-width: 2500px)" />
              <img
                src={imgError}
                alt="Imagen de un análisis molar con radiografía"
                className="w-full h-full object-cover object-center opacity-70"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
