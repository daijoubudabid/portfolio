import Link from "next/link";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaMap,
  FaPhoneSquareAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Button } from "./Button";

const inputFields = [
  {
    name: "name",
    placeholder: "YOUR NAME",
    type: "text",
    colSpan: "col-span-2 md:col-span-1",
  },
  {
    name: "email",
    placeholder: "YOUR EMAIL",
    type: "email",
    colSpan: "col-span-2 md:col-span-1",
  },
  {
    name: "subject",
    placeholder: "YOUR SUBJECT",
    type: "text",
    colSpan: "col-span-2",
  },
];

export const ContactForm = () => {
  return (
    <div className="container pb-[3.8rem]">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="px-4">
          <div className="grid grid-cols-1">
            <h3 className="pb-[1rem] text-[1.35rem] font-semibold uppercase text-default dark:text-white sm:text-[1.65rem]">
              DON’T BE SHY !
            </h3>
          </div>
          <p className="mb-6 max-w-xl font-open-sans text-[15px] text-default dark:text-white">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <p className="relative mb-5 ps-12 pt-2 font-open-sans text-[15px] font-semibold text-default dark:text-white">
            <span className="absolute start-0 top-[.65rem] text-[33px] text-primary">
              <FaMap />
            </span>
            <span className="block font-normal uppercase opacity-80">
              Address Point
            </span>
            Chittagong, Rangamati.
          </p>
          <p className="relative mb-5 ps-[3.2rem] pt-2 font-open-sans text-[15px] font-semibold text-default dark:text-white">
            <span className="absolute start-0 top-[.65rem] text-[33px] text-primary">
              <FaEnvelopeOpen />
            </span>
            <span className="block font-normal uppercase opacity-80">
              Mail Me
            </span>
            dabidmarma@gmail.com
          </p>
          <p className="relative mb-5 ps-12 pt-2 font-open-sans text-[15px] font-semibold text-default dark:text-white">
            <span className="absolute start-0 top-[.65rem] text-[33px] text-primary">
              <FaPhoneSquareAlt />
            </span>
            <span className="block font-normal uppercase opacity-80">
              Call Me
            </span>
            +216 21 184 010
          </p>
          <ul className="mb-12 flex gap-3 pt-4">
            <Link href="www.facebook.com">
              <li className="group flex h-10 w-10 items-center justify-center rounded-full bg-light text-default transition-all duration-300 hover:bg-primary hover:text-white dark:bg-dark dark:text-white hover:dark:bg-primary">
                <FaFacebookF />
              </li>
            </Link>
            <Link href="www.facebook.com">
              <li className="group flex h-10 w-10 items-center justify-center rounded-full bg-light text-default transition-all duration-300 hover:bg-primary hover:text-white dark:bg-dark dark:text-white hover:dark:bg-primary ">
                <FaXTwitter />
              </li>
            </Link>
            <Link href="www.facebook.com">
              <li className="group flex h-10 w-10 items-center justify-center rounded-full bg-light text-default transition-all duration-300 hover:bg-primary hover:text-white dark:bg-dark dark:text-white hover:dark:bg-primary ">
                <FaGithub />
              </li>
            </Link>

            <Link href="www.facebook.com">
              <li className="group flex h-10 w-10 items-center justify-center rounded-full bg-light text-default transition-all duration-300 hover:bg-primary hover:text-white dark:bg-dark dark:text-white hover:dark:bg-primary">
                <FaInstagram />
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-2">
          <form>
            <div className="grid grid-cols-1 gap-[1.90rem] px-4 md:grid-cols-2 lg:ps-12">
              {inputFields.map((input, index) => (
                <div key={index} className={`${input.colSpan}`}>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    className="w-full rounded-full border border-gray-300 bg-white px-[1.625rem] py-[.7rem] text-[15px] caret-primary outline-none transition-all duration-300 placeholder:text-default autofill:bg-black focus:border-primary focus:outline-none dark:border-[#111] dark:bg-dark dark:text-white focus:dark:border-primary"
                    required
                  />
                </div>
              ))}
              <div className="col-span-2">
                <textarea
                  name="message"
                  id="message"
                  className="min-h-[12.5rem] w-full rounded-[2rem] border border-gray-300 bg-white px-[1.625rem] py-[.7rem] text-[15px] caret-primary outline-none transition-all duration-300 placeholder:text-default focus:border-primary focus:outline-none dark:border-[#111] dark:bg-dark dark:text-white focus:dark:border-primary"
                  placeholder="YOUR MESSAGE"
                />
              </div>
              <div>
                <Button
                  name={"Send Message"}
                  icon={<FaTelegramPlane size={23} />}
                  type={"submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
