import close from "@/public/close.svg";
import Image from "next/image";
import { useEffect } from "react";
import { Education } from "./Education";
import { PersonalDetails } from "./PersonalDetails";
import { Skills } from "./Skills";
import { Title } from "./Title";

export const AboutModal = ({ onCLose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  return (
    <div className="fixed right-0 top-0 z-[99] h-svh w-full">
      <div className="absolute left-1/2 top-1/2 z-50 h-auto -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-modal dark:bg-[#111]">
        <div className="h-[75svh] w-[350px] overflow-y-scroll sm:w-[550px] md:w-[700px] lg:w-[900px]">
          <Title
            backgroundName={"Resume"}
            firstName={"About"}
            secondName={"Me"}
          />
          <PersonalDetails />
          <Skills />
          <Education />
        </div>
        <button
          className="absolute -right-0 -top-12 flex h-[35px] w-[35px]  items-center justify-center rounded-full transition-opacity duration-300 hover:opacity-80 sm:-right-0 sm:-top-12 sm:h-[40px] sm:w-[40px] xl:-right-12 xl:-top-10"
          onClick={onCLose}
        >
          <Image src={close} alt="close" className="invert" />
        </button>
      </div>
    </div>
  );
};
