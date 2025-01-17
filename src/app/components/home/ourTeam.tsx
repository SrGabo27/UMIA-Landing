'use client'
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Section } from "../shared/section";

type FormValues = {
  nombre: string;
  email: string;
  telefono: string;
  comentario: string;
  accept: boolean;
};

export const OurTeam: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <Section
      idName="our-team"
      sectionName="UMIA"
      title="Nosotros"
      description="En UMIA trabajamos para conectar a pacientes con profesionales de salud calificados de manera rápida, sencilla y segura. Nuestra plataforma utiliza tecnología innovadora para facilitar la gestión de citas, mejorar la comunicación y ofrecer una experiencia médica personalizada."
    >
      <div className="flex flex-col px-5 sm:px-[50px] md:px-[114px] mb-[20px]">
        <h3 className="text-umia-light-gray text-[20px] xl:text-2xl font-semibold">
          Contáctanos
        </h3>
        <p className="text-umia-light-gray text-[18px] xl:text-2xl font-medium mt-3">
          Rellena el formulario y nos podrenmos en contacto contigo
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center min-h-[330px] mt-14  md:px-[80px] gap-4 ">
          <div className="flex flex-col 2xl:flex-row gap-4">
            <div className="flex flex-col  gap-4 w-[320px] sm:w-[440px]">
              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre", { required: true })}
                className="h-[60px] border-2 border-umia-gray rounded-lg px-5 placeholder-umia-gray"
              />
              {errors.nombre && <span>Este campo es requerido</span>}
              <input
                type="email"
                placeholder="Correo Electrónico"
                {...register("email", { required: true })}
                className="h-[60px] border-2 border-umia-gray rounded-lg px-5"
              />
              {errors.email && <span>Este campo es requerido</span>}
              <input
                type="text"
                placeholder="Teléfono"
                {...register("telefono", { required: true })}
                className="h-[60px] border-2 border-umia-gray rounded-lg px-5"
              />
              {errors.telefono && <span>Este campo es requerido</span>}
            </div>
            <textarea
              placeholder="Comentario"
              {...register("comentario", { required: true })}
              className="resize-none w-[320px] sm:w-[440px] h-[212px] border-2 border-umia-gray rounded-lg p-5 focus-visible:border-umia-gray"
            />
            {errors.comentario && <span>Este campo es requerido</span>}
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="accept"
              {...register("accept", { required: true })}
              className="w-4"
            />
            <label htmlFor="accept">Acepto compartir mi información</label>
            {errors.accept && <span>Este campo es requerido</span>}
          </div>

          <button
            type="submit"
            className="bg-umia-green rounded-xl w-[245px] h-[58px] text-white text-xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </Section>
  );
};
