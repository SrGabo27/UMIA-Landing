import { FC } from "react";

/**
 * Component for Banner Phrase in Home Page
 */
export const BannerQuote: FC = () => {
  return (
    <div className="w-full h-[185px] bg-umia-green absolute left-0 flex justify-center items-center">
      <h3 className="font-bold text-white md:text-lg lg:text-xl text-center">
        Creemos que la salud debe estar al alcance de todos, en cualquier
        momento y lugar.
      </h3>
    </div>
  );
};
