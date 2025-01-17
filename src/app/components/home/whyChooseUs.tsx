import { FC } from "react";
import { Section } from "../shared/section";

const benefits = [
  {
    title: "Agenda tus citas en segundos",
    description:
      "Olvídate de las largas esperas. Encuentra médicos disponibles y selecciona el horario que mejor se adapte a ti.",
  },
  {
    title: "Consulta con profesionales certificados",
    description:
      "Accede a un directorio de médicos altamente calificados en áreas como Medicina Interna, Enfermería, y Terapia Respiratoria.",
  },
  {
    title: "Historial médico digital",
    description:
      "Conserva todos tus datos médicos en un lugar seguro y accesible desde cualquier dispositivo.",
  },
  {
    title: "Atención personalizada",
    description:
      "Comunícate directamente con tu médico para resolver dudas antes o después de tu cita.",
  },
];

export const WhyChooseUs: FC = () => {
  return (
    <Section
      idName="why-choose-us"
      sectionName="¿Por qué elegirnos?"
      title="Atención Médica de Calidad, Adaptada a Tus Necesidades"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center m-auto px-5 sm:px-[50px] md:px-[114px] gap-4">
        {benefits.map((benefit, index) => (
          <div
            className="flex flex-col m-auto max-w-[420px] lg:max-w-[520px] gap-2"
            key={index}
          >
            <h3 className=" flex items-center text-umia-green font-bold text-xl h-[60px] text-center md:text-start max-w-[300px] xl:max-w-[420px]">
              {benefit.title}
            </h3>
            <p className="text-base font-normal h-[96px]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
