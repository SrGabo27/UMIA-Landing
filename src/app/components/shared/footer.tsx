import Image from "next/image";
import { FC } from "react";
import logoWhite from "@/assets/logoWhite.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col 2xl:flex-row items-center 2xl:items-start 2xl:justify-around bg-umia-green py-20 px-8 xl:px-28 text-white w-full min-h-[520px] relative  gap-10 2xl:gap-20">
      <Image
        src={logoWhite.src}
        width={210}
        height={200}
        alt="UMIA Logo"
        className="w-[280px] h-[100px]"
      />

      <ul className="flex flex-row 2xl:flex-col my-[30px] 2xl:my-0  gap-8">
        <li>
          <h4 className="font-bold text-xl">Información Legal</h4>
          <Link href={`/umia-términos-y-condiciones.pdf`} target="_blank" rel="noopener noreferrer" className="text-md">
            Términos y condiciones
          </Link>
        </li>

        <li>
          <h4 className="font-bold text-xl">Privacidad y Seguridad</h4>
          <Link
            href={`/umia-manual-de-seguridad-y-privacidad.pdf`}
            target="_blank" rel="noopener noreferrer"
            className="text-md"
          >
            Política de privacidad
          </Link>
        </li>
      </ul>

      <form className="flex flex-col max-w-[380px] gap-4">
        <h3 className="text-white font-bold text-2xl mb-4">
          Mantente Informado con las Últimas Novedades Médicas
        </h3>

        <input
          type="text"
          placeholder="Ingresa tu Correo Electronico"
          className="bg-white shadow-md placeholder-umia-light-gray2 w-full rounded-xl h-16 px-9 text-black"
        />

        <button
          type="submit"
          className="bg-umia-green-dark shadow-md w-full rounded-xl h-16 text-center mb-8"
        >
          Unirse a nuestra comunidad
        </button>
      </form>

      <div className="absolute flex gap-4 bottom-8 right-16 text-[36px]">
        <Link href={"https://www.facebook.com/100092284486340"}>
          <FaFacebook />
        </Link>
        {/* <Link href={""}>
          <FaYoutube />
        </Link> */}
        <Link href={"https://www.instagram.com/umiasalud/"}>
          <FaInstagram />
        </Link>
        {/* <Link href={""}>
          <FaSquareXTwitter />
        </Link> */}
      </div>
    </footer>
  );
};
