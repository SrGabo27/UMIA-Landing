import { FC, ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  idName?: string;
  sectionName?: string;
  anchor?: string;
  title?: string;
  description?: string;
  className?: string;
};
export const Section: FC<SectionProps> = ({
  children,
  idName,
  sectionName,
  title,
  className,
  description,
}) => {
  return (
    <section className={`flex flex-col w-full py-[59px] ${className}`}>
      <div className="flex flex-col px-5 sm:px-[50px] md:px-[114px] ">
        <span className="text-lg sm:text-[24px] font-medium" id={idName}>
          {sectionName?.toUpperCase()}
        </span>

        <h2 className="text-umia-green text-[26px] md:text-[30px] xl:text-[36px] font-semibold mt-[33px] text-pretty text-center md:text-start">
          {title}
        </h2>

        <p className="text-sm md:text-[24px] text-umia-light-gray font-medium mt-5 text-pretty">
          {description}
        </p>
      </div>

      <div className="mt-[79px]">{children}</div>
    </section>
  );
};
