import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    date: "2024 - Present",
    post: "Web Developer",
    company: "Gontop",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaBriefcase />,
  },
  {
    date: "2024",
    post: "Engineering Degree",
    company: "Dhaka University",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaGraduationCap size={20} />,
  },
  {
    date: "2020 - 2024",
    post: "Ui/Ux Designer",
    company: "Tanjhang",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaBriefcase />,
  },
  {
    date: "2020",
    post: "Master Degree",
    company: "National University",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaGraduationCap size={20} />,
  },
  {
    date: "2017 - 2020",
    post: "Learning Programming",
    company: "Self Learner",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaBriefcase />,
  },

  {
    date: "2016",
    post: "Bachelor Degree",
    company: "National University",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
    icon: <FaGraduationCap size={20} />,
  },
];

export const Education = () => {
  return (
    <div>
      <div className="container px-4 pb-5">
        <div className="grid grid-cols-1">
          <h3 className="pb-[3rem] text-start text-[1.35rem] font-semibold uppercase text-default dark:text-white sm:text-center sm:text-[1.65rem]">
            Experience & Education
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {educationData.map((item, index) => (
            <ul className="m-0 p-0" key={index}>
              <li className="relative mb-[3.75rem] pe-5 ps-[3.75rem] text-default after:absolute after:bottom-0 after:left-5 after:top-0 after:-z-[1] after:border-l after:border-gray-300 dark:text-white after:dark:border-[#333]">
                <div className="absolute left-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary leading-[2.5rem] text-white">
                  {item.icon}
                </div>
                <span className="mb-3 inline-block rounded-3xl bg-gray-400 px-3 py-px font-open-sans text-sm font-semibold uppercase text-white opacity-80 dark:bg-[#252525]">
                  {item.date}
                </span>
                <h5 className="mb-3 mt-2 text-lg uppercase font-medium">
                  {item.post}
                  <span className="relative ps-6 font-open-sans text-[15px] opacity-80 before:absolute before:left-[7px] before:top-[9px]  before:h-[2px] before:w-[10px] before:bg-gray-500 before:dark:bg-white/80">
                    {item.company}
                  </span>
                </h5>
                <p className="font-open-sans text-sm text-default dark:text-white/90">
                  {item.desc}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
