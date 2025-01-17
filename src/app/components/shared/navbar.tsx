"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { IconBurguer } from "./icons/IconBurguer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: FC = () => {
  const pathname = usePathname();
  const menu = pathname === "/professional" ? [
    { name: "Inicio", href: "/" },
    { name: "¿Eres profesional de salud?", href: "/professional" },
  ] : [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#services" },
    { name: "¿Por qué elegirnos?", href: "#why-choose-us" },
    { name: "Especialidades", href: "#specialties" },
    { name: "Nosotros", href: "#our-team" },
    { name: "¿Eres profesional de salud?", href: "/professional" },
  ];
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    if (showMobile) document.body.style.overflow = "hidden";
    if (!showMobile) document.body.style.overflow = "auto";
  }, [showMobile]);

  const handleShowMobile = () => {
    setShowMobile((prev) => !prev);
  };

  const onNavigate = () => {
    setShowMobile(false);
  };

  return (
    <>
      <nav className="w-full h-full pt-6 md:pt-[99px] pb-[33px] flex justify-between items-center z-[1000] px-5">
        <Image
          src={logo.src}
          width={268}
          height={75}
          className="w-[168px] md:w-[268px] h-[50px] md:h-[75px]"
          alt="UMIA Logo"
        />

        <div className="flex gap-[13px] items-center">
          <ul className="gap-[23px] text-umia-green font-semibold text-[15px] hidden xl:flex">
            {menu.map((item, index) => (
              <Link href={item.href} key={index} className="font-sora">
                <li className={`cursor-pointer ${pathname === item.href ? "text-umia-green-dark" : ""}`}>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          <span onClick={handleShowMobile} className="xl:hidden cursor-pointer">
            <IconBurguer />
          </span>
        </div>
      </nav>

      <div
        className={`bg-white fixed h-[100vh] left-0 z-[999] w-full ${showMobile ? "translate-x-0" : "translate-x-[100vw]"} transition-transform duration-300 ease-in-out`}
      >
        <ul className="gap-[15px] text-umia-green font-semibold text-xl flex flex-col xl:hidden p-5">
          {menu.map((item, index) => (
            <div key={index}>
              <Link href={item.href} onClick={onNavigate} className="font-sora">
                <li className={`cursor-pointer ${pathname === item.href ? "text-umia-green-dark" : ""}`}>
                  {item.name}
                </li>
              </Link>

              <div className="w-full h-[1px] bg-gray-400 mt-[15px]"></div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
