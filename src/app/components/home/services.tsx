import { FC } from 'react'
import { Section } from '../shared/section'
import { IconAppointment } from '../shared/icons/IconAppointment';
import { IconHome } from '../shared/icons/IconHome';
import { IconPresential } from '../shared/icons/IconPresential';
import { IconEmergency } from '../shared/icons/IconEmergency';

export const Services: FC = () => {

      const services = [
        {
          title: "Video Consulta",
          description:
            "Conéctate en línea con un médico desde la comodidad de tu hogar.",
          icon: <IconAppointment />,
        },
        {
          title: "En tu Casa",
          description:
            "Recibe atención médica en tu domicilio, sin necesidad de desplazarte.",
          icon: <IconHome />,
        },
        {
          title: "En el Consultorio",
          description:
            "Visita a un médico en persona en el hospital o clínica más cercana",
          icon: <IconPresential />,
        },
        {
          title: "Urgencias 24/7",
          description:
            "Obtén atención inmediata para emergencias, disponible en todo momento.",
          icon: <IconEmergency />,
        },
      ];
    

  return (
    <Section
    idName="services"
    sectionName="servicios"
    title="Cuidado Médico Integral A Tu Alcance"
    description="Elige entre nuestros servicios y accede a la atención que necesitas, donde y cuando la necesites:"
  >
    <div className="flex gap-4 flex-wrap justify-center">
      {services.map((service, index) => (
        <div
          className="bg-white card-shadow p-[42px] flex  flex-col items-center justify-center max-w-[326px] w-full rounded-[20px]"
          key={index}
        >
          {service.icon}

          <h3 className="mt-10 text-umia-green font-semibold text-xl">
            {service.title}
          </h3>

          <p className="text-center text-[15px] mt-[10px] text-[#100E3D99]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </Section>
  )
}
