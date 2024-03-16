import hero_mobile from "@/public/hero-mobile.jpg";
import hero from "@/public/hero.jpg";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { AboutModal } from "./AboutModal";
import { Button } from "./Button";

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section>
      <div className="fixed left-[-83%] top-[-50%] -z-10 hidden h-[200%] w-full rotate-[-15deg] bg-primary lg:block" />
      <div className="container">
        <div className="flex h-svh flex-wrap lg:items-center">
          <div className="w-full lg:w-4/12">
            <Image
              src={hero}
              alt="hero image"
              className="fixed left-10 top-10 hidden h-[calc(100vh-80px)] w-1/3 rounded-[30px] object-cover object-center shadow-xl shadow-black/60 lg:block"
              placeholder="blur"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className="mx-auto w-full px-4 lg:max-w-[500px] lg:px-0 xl:max-w-[550px]">
            <Image
              src={hero_mobile}
              alt="hero image"
              className="mx-auto mb-[25px] block h-[230px] w-[230px] rounded-full border-4 border-solid border-gray-800 md:h-[270px] md:w-[270px] lg:hidden"
              placeholder="blur"
              draggable={false}
              loading="lazy"
            />
            <h1 className="relative text-center text-[29px] font-bold uppercase leading-tight text-primary sm:text-[38px]  lg:text-start xl:ms-16 xl:text-[51px] xl:before:absolute xl:before:-left-16 xl:before:top-8 xl:before:h-[4px] xl:before:w-[40px] xl:before:bg-primary">
              I’m Dabid Marma.
              <span className="block text-default dark:text-white">
                Web{" "}
                <Typewriter
                  words={["Developer", "Designer"]}
                  cursorBlinking={true}
                  cursor={true}
                  loop={true}
                />
              </span>
            </h1>
            <p className="mx-auto mb-[23px] mt-2.5 max-w-xl text-center font-open-sans text-[15px] leading-[30px] text-default dark:text-white/90 lg:mx-0 lg:mb-[28px] lg:mt-[15px] lg:text-start lg:text-base lg:leading-[35px] xl:max-w-max">
              I’m a Bangladesh based web designer & front‑end developer focused
              on crafting clean & user‑friendly experiences, I am passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                name={"More About Me"}
                icon={<FaArrowRight />}
                onClick={handleOpenModal}
              />
            </div>
          </div>
        </div>
      </div>
      {openModal && <AboutModal onCLose={handleCloseModal} />}
    </section>
  );
};
