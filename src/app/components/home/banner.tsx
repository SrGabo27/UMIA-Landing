import { FC } from "react";
import banner from "@/assets/headerBackground.png";
import bannerTablet from "@/assets/headerBackgroundTablet.png";
import bannerMobile from "@/assets/headerBackgroundMobile.png";

export const BannerHome: FC = () => {
  return (
    <div className="relative w-full max-h-[660px] h-[200px] md:h-[350px] lg:h-[560px] xl:h-[660px] ">
      <picture>
        <source media="(max-width: 400px)" srcSet={bannerMobile.src} />
        <source media="(max-width: 1024px)" srcSet={bannerTablet.src} />
        <img
          src={banner.src}
          className="w-full opacity-90 h-[200px] md:h-[350px] lg:h-[560px]  xl:h-[660px] max-h-[660px]"
          alt="bannerHome"
        />
      </picture>

      <div className="flex absolute flex-col top-[80px] lg:top-[120px] xl:h-[154px] left-[30px] md:left-[109px]">
        <h1 className="text-umia-green text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold">
          Agenda tu cita médica hoy
        </h1>

        <p className="text-sm sm:text-base md:text-lg xl:text-[21px] font-xl text-pretty lg:max-w-full w-[260px] sm:w-full">
          Acceso inmediato a profesionales de la salud sin complicaciones
        </p>
      </div>
    </div>
  );
};
