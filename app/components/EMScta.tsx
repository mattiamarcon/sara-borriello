"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function EMScta() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-second dark:text-white">
              L'avanguardia dell'allenamento <br />
              <span className="text-4xl md:text-[6rem] text-first font-bold mt-1 leading-none">
               Tecnologia EMS
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`hero.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

