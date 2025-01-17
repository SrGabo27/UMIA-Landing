import React, { FC } from "react";
import { Section } from "../shared/section";
import { IconDoctor } from "../shared/icons/IconDoctor";
import { IconVaccine } from "../shared/icons/IconVaccine";
import { IconLungs } from "../shared/icons/IconLungs";

const specialties = [
  {
    title: "Medicina Interna",
    description:
      "Consulta médica general, manejo de enfermedades crónicas, y evaluación integral de tu salud.",
    icon: <IconDoctor/>,
  },
  {
    title: "Enfermería",
    description:
      "Cuidado postoperatorio, administración de medicamentos, y monitoreo de signos vitales.",
    icon: <IconVaccine/>,
  },
  {
    title: "Terapia Respiratoria",
    description:
      "Tratamiento de afecciones respiratorias, manejo de oxigenoterapia, y rehabilitación pulmonar.",
    icon: <IconLungs/>,
  },
];

export const Specialties: FC = () => {
  return (
    <div className="mt-[200px]">
      <Section idName="specialties" sectionName="Especialidades" title="Contamos Con Especialistas En:">
        <div className="flex flex-col lg:flex-row items-center lg:justify-around max-w-[1600px] m-auto gap-8">
          {specialties.map((specialty, index) => (
            <div
              className="flex flex-col justify-center items-center w-[375px] gap-2"
              key={index}
            >
              <div className="bg-umia-gray flex justify-center items-center w-32 h-32 rounded-full shadow-lg">
                {specialty.icon}
              </div>

              <h3 className="font-semibold text-umia-green text-center text-xl mt-6 h-9">
                {specialty.title}
              </h3>
              <p className="font-medium text-sm text-umia-light-gray2 text-center h-9">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-umia-green-dark text-center text-xl font-semibold">
            ¿Buscas otra especialidad?
          </h3>
          <p className=" text-center text-umia-light-gray font-medium">
            Estamos ampliando nuestras opciones para incluir psicología,
            pediatría, dermatología y más.
          </p>
        </div>
      </Section>
    </div>
  );
};
