import close from "@/public/close.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegFileAlt, FaRegShareSquare, FaRegUser } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

export const Modal = ({
  onClose,
  projectName,
  type,
  client,
  language,
  img,
  url,
  linkName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isModalOpen) {
    return null;
  }
  return (
    <section className="fixed left-0 top-0 z-[99] h-svh w-full">
      <div className="absolute left-1/2 top-1/2 z-[9999] h-auto w-4/5 max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[1rem] bg-white px-4 py-4 shadow-modal transition-all duration-300 dark:bg-dark sm:px-8 sm:py-8">
        <div>
          <h2 className="mb-2 pb-5 text-center text-[22px] font-bold uppercase tracking-[2px] text-primary sm:text-[26px] md:pt-4 md:text-[33px]">
            {projectName}
          </h2>
        </div>
        <div className="mb-7 grid grid-cols-1 gap-x-5 gap-y-2 font-open-sans sm:grid-cols-2">
          <div className="text-[.95rem] text-default dark:text-white">
            <span className="mb-[.2rem] me-1 inline-block align-middle">
              <FaRegFileAlt />
            </span>
            Project:
            <span className="ms-1 font-semibold">{type}</span>
          </div>
          <div className="text-[.95rem] text-default dark:text-white">
            <span className="mb-[.2rem] me-1 inline-block align-middle">
              <FaRegUser />
            </span>
            Client:
            <span className="ms-1 font-semibold text-default dark:text-white">
              {client}
            </span>
          </div>
          <div className="text-[.95rem] text-default dark:text-white">
            <span className="mb-[.2rem] me-1 inline-block align-middle">
              <IoCodeSlash />
            </span>
            Language:
            <span className="ms-1 font-semibold text-default dark:text-white">
              {language}
            </span>
          </div>
          <div className="text-[.95rem] text-default dark:text-white">
            <span className="mb-[.2rem] me-1 inline-block align-middle">
              <FaRegShareSquare />
            </span>
            Preview:
            <a
              href={url}
              className="ms-1 inline-block font-semibold text-primary underline underline-offset-2"
            >
              {linkName}
            </a>
          </div>
        </div>
        <figure className="max-h-[250px] w-full overflow-y-scroll rounded-xl bg-light dark:bg-dark sm:max-h-[300px] md:max-h-[350px]">
          <Image
            src={img}
            alt="works"
            loading="lazy"
            placeholder="blur"
            className=""
          />
        </figure>
        <button
          className="absolute -right-0 -top-10 flex h-[30px] w-[30px] items-center justify-center  rounded-full transition-opacity duration-300 hover:opacity-80 sm:-right-[3.5rem] sm:top-0 sm:h-[40px] sm:w-[40px]"
          onClick={closeModal}
        >
          <Image src={close} alt="close" className="invert" />
        </button>
      </div>
    </section>
  );
};
