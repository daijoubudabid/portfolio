import hero_mobile from "@/public/hero-mobile.jpg";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { Button } from "./Button";
import { Separator } from "./Separator";

const details = [
  {
    inputName: "First Name",
    text: "Dabid",
  },
  {
    inputName: "Last Name",
    text: "Marma",
  },
  {
    inputName: "Age",
    text: "20 Years",
  },
  {
    inputName: "Nationality",
    text: "Bangladeshi",
  },
  {
    inputName: "Freelance",
    text: "Available",
    color: "text-[#5be85b]",
  },
  {
    inputName: "Address",
    text: "Bangladesh",
  },
  {
    inputName: "Phone",
    text: "+21621184010",
  },
  {
    inputName: "Email",
    text: "dabidmarma@gmail.com",
    break_word: "break-words",
  },
  {
    inputName: "Skype",
    text: "dabid.marma",
  },
  {
    inputName: "Language",
    text: "Bangla, English",
  },
];

const stats = [
  {
    number: "12",
    nameOne: "Years Of",
    nameTwo: "Experience",
  },
  {
    number: "97",
    nameOne: "Completed",
    nameTwo: "Projects",
  },
  {
    number: "81",
    nameOne: "Happy",
    nameTwo: "Customers",
  },
  {
    number: "53",
    nameOne: "Awards",
    nameTwo: "Won",
  },
];

export const PersonalDetails = () => {
  return (
    <section>
      <div className="container px-4 pb-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="pb-[1.4rem] text-[1.35rem] font-semibold uppercase text-default dark:text-white sm:text-[1.65rem]">
              Personal Infos
            </h3>
            <div className="pb-6 sm:pb-0">
              <Image
                src={hero_mobile}
                placeholder="blur"
                alt="hero image"
                className="mx-auto block h-[230px] w-[230px] rounded-full border-4 border-gray-900 sm:hidden"
              />
            </div>
            <div className="col-span-full">
              <ul className="flex flex-wrap font-open-sans">
                {details.map((item, index) => (
                  <li
                    key={index}
                    className="w-1/2 pb-[1.4rem] text-[.95rem] text-default last:pb-0 dark:text-white "
                  >
                    <span className="opacity-80">{item.inputName}: </span>
                    <span
                      className={`${item.color} ${item.break_word} block font-semibold sm:inline-block lg:block xl:inline-block`}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <a href={"/CV.pdf"} download>
                <Button name={"Download CV"} icon={<FaDownload />} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-7">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 px-7 py-5 dark:border-gray-800 sm:px-10"
              >
                <h3 className="relative text-[2.5rem] font-bold text-primary after:absolute after:top-0 after:text-[2rem] after:font-normal after:content-['+'] sm:text-[3.15rem]">
                  {item.number}
                </h3>
                <p className="relative font-open-sans text-[15px] uppercase text-default dark:text-white sm:ps-[2.5rem] sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-px sm:before:w-[1.88rem] sm:before:-translate-y-1/2 sm:before:bg-[#777]">
                  {item.nameOne}
                </p>
                <p className="font-open-sans text-[15px] uppercase text-default dark:text-white sm:ps-[2.5rem]">
                  {item.nameTwo}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Separator />
      </div>
    </section>
  );
};
