import project_6_large from "@/public/bistro-bliss.png";
import project_2_large from "@/public/citadel.png";
import project_5_large from "@/public/crypto.png";
import project_3_large from "@/public/docmed.png";
import project_1 from "@/public/project-1.png";
import project_2 from "@/public/project-2.png";
import project_3 from "@/public/project-3.png";
import project_4 from "@/public/project-4.png";
import project_5 from "@/public/project-5.png";
import project_6 from "@/public/project-6.png";
import project_7 from "@/public/project-7.jpg";
import project_8 from "@/public/project-8.jpg";
import project_9 from "@/public/project-9.jpg";
import project_1_large from "@/public/stradale.png";
import project_4_large from "@/public/web-ai.png";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "./Modal";

const projectDetails = [
  {
    img: project_1,
    name: "Restaurant Project",
    linkName: "stradale.vercel.app",
    url: "https://stradale.vercel.app/",
    type: "Website",
    client: "Private",
    language: "Bootstrap, React",
    largeImg: project_1_large,
  },
  {
    img: project_2,
    name: "Furniture Project",
    linkName: "citadel-psi.vercel.app",
    url: "https://citadel-psi.vercel.app/",
    type: "Website",
    client: "Private",
    language: "Bootstrap, React",
    largeImg: project_2_large,
  },
  {
    img: project_3,
    name: "Healthcare Project",
    linkName: "docmed-one.vercel.app",
    url: "https://docmed-one.vercel.app/",
    type: "Website",
    client: "Private",
    language: "Bootstrap, React",
    largeImg: project_3_large,
  },
  {
    img: project_4,
    name: "AI Landing Project",
    linkName: "web-ai-navy.vercel.app",
    url: "https://web-ai-navy.vercel.app/",
    type: "Website",
    client: "Private",
    language: "Tailwind, React",
    largeImg: project_4_large,
  },
  {
    img: project_5,
    name: "Crypto Landing Page",
    linkName: "cryto-kappa.vercel.app",
    url: "https://cryto-kappa.vercel.app/",
    type: "Website",
    client: "Private",
    language: "Bootstrap, React",
    largeImg: project_5_large,
  },
  {
    img: project_6,
    name: "Restaurant Project",
    linkName: "bistro-bliss.netlify.app",
    url: "https://bistro-bliss.netlify.app/",
    type: "Website",
    client: "Private",
    language: "Tailwind, React",
    largeImg: project_6_large,
  },
  {
    img: project_7,
    name: "Restaurant Project",
    linkName: "bistro-bliss.netlify.app",
    url: "https://bistro-bliss.netlify.app/",
    type: "Website",
    client: "Private",
    language: "Tailwind, React",
    largeImg: project_7,
  },
  {
    img: project_8,
    name: "Restaurant Project",
    linkName: "stradale.netlify.app",
    url: "https://stradale.netlify.app/",
    type: "Website",
    client: "GonTop",
    language: "Bootstrap, React",
    largeImg: project_8,
  },
  {
    img: project_9,
    name: "Restaurant Project",
    linkName: "stradale.netlify.app",
    url: "https://stradale.netlify.app/",
    type: "Website",
    client: "GonTop",
    language: "Bootstrap, React",
    largeImg: project_9,
  },
];

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleShowModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 gap-8 pb-[4.4rem] sm:grid-cols-2 lg:grid-cols-3">
        {projectDetails.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => handleShowModal(index)}
          >
            <Image
              src={item.img}
              alt="project image"
              placeholder="blur"
              className="rounded-xl"
              draggable={false}
              loading="lazy"
            />
            <h3 className="group absolute top-0 flex h-full w-full items-center justify-center rounded-xl bg-transparent text-lg font-medium uppercase text-white transition-all duration-300 hover:bg-primary/80">
              <span className="-translate-y-8 opacity-0 transition-all duration-300 group-hover:-translate-y-0 group-hover:opacity-100">
                {item.name}
              </span>
            </h3>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          projectName={projectDetails[currentIndex].name}
          type={projectDetails[currentIndex].type}
          client={projectDetails[currentIndex].client}
          language={projectDetails[currentIndex].language}
          img={projectDetails[currentIndex].largeImg}
          url={projectDetails[currentIndex].url}
          linkName={projectDetails[currentIndex].linkName}
        />
      )}
    </div>
  );
};
