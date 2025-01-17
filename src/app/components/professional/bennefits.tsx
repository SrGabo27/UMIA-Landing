import { FC } from "react";
import { IconCalendar } from "../shared/icons/IconCalendar";
import { IconEye } from "../shared/icons/IconEye";
import { IconComunication } from "../shared/icons/IconComunication";

export const Bennefits: FC = () => {
  const benefits = [
    {
      icon: <IconCalendar />,
      title: "Gestión de citas simplificada",
      description:
        "Organiza tus consultas de forma eficiente a través de nuestra plataforma. Ahorra tiempo y minimiza cancelaciones.",
    },
    {
      icon: <IconEye />,
      title: "Mayor visibilidad",
      description:
        "Amplía tu alcance. Destaca tu perfil profesional y conecta con más pacientes en tu zona.",
    },
    {
      icon: <IconComunication />,
      title: "Mejor comunicación  con los pacientes",
      description:
        "Mantente en contacto con tus pacientes de manera rápida y segura gracias a nuestra plataforma de mensajería integrada.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-around max-w-[1600px] m-auto mb-16 gap-8">
      {benefits.map((benefit, index) => (
        <div
          className="flex flex-col justify-center items-center w-[320px] md:w-[375px] gap-2"
          key={index}
        >
          <div className="flex justify-center items-center w-32 h-[66px]">
            {benefit.icon}
          </div>

          <h3 className="font-semibold text-umia-green text-center text-xl mt-6 h-14">
            {benefit.title}
          </h3>
          <p className="font-semibold text-sm text-umia-light-gray text-center h-16">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};
