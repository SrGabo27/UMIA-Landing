import { FC } from "react";
import banner from "@/assets/bannerAreYouProfessional.png";
import bannerTablet from "@/assets/bannerAreYouProfessionalTablet.png";
import bannerMobile from "@/assets/bannerAreYouProfessionalMobile.png";

export const BannerProfessionalView: FC = () => {
  return (
    <div className="relative w-full h-[450px] sm:h-[450px] mb-10">
      <picture>
        <source media="(max-width: 400px)" srcSet={bannerMobile.src} />
        <source media="(max-width: 1024px)" srcSet={bannerTablet.src} />
        <img
          src={banner.src}
          className="w-full opacity-90 h-[450px] lg:h-[450] max-h-[450px]"
          alt="bannerHome"
        />
      </picture>

      <div className="flex absolute flex-col top-[40px] lg:top-[80px] xl:h-[154px] left-[30px] md:left-[50px] max-w-[500px] md:max-w-[860px] gap-4">
        <h1 className="text-umia-green text-[30px] lg:text-[40px] xl:text-[50px] font-semibold ">
          Simplifica Tu Trabajo <br /> como Profesional de la Salud
        </h1>

        <p className="text-base xl:text-[21px] font-xl text-pretty lg:max-w-full text-umia-light-gray w-[260px] sm:w-[440px] md:w-full">
          Acceso inmediato a profesionales de la salud sin complicaciones
        </p>

        <button className="bg-umia-green max-w-[250px] min-h-[50px] rounded-xl text-white sm:mt-10">
          Únete a UMIA Hoy
        </button>
      </div>
    </div>
  );
};
