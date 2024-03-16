import Link from "next/link";
import { useRouter } from "next/router";
import { FaEnvelopeOpen, FaHome, FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

const navLinks = [
  {
    icon: <FaHome />,
    name: "Home",
    url: "/",
  },
  {
    icon: <FaUserAlt />,
    name: "About",
    url: "/about",
  },
  {
    icon: <FaBriefcase />,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    icon: <FaEnvelopeOpen />,
    name: "Contact",
    url: "/contact",
  },
  // {
  //   icon: <FaComments />,
  //   name: "Blog",
  //   url: "/blog",
  // },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="dark:bg-dark_2 fixed bottom-0 top-0 z-[8] mt-auto flex h-max w-full flex-col items-center bg-white shadow-2xl shadow-slate-950 lg:right-6 lg:h-screen lg:w-16 lg:max-w-md lg:justify-center lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
      <ul className="flex w-full items-center justify-around lg:block lg:w-auto">
        {navLinks.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <li
              className={`group relative my-2 flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full text-default transition-all duration-300 hover:bg-primary hover:text-white dark:text-white hover:dark:bg-primary lg:my-5 lg:h-[50px] lg:w-[50px] ${router.pathname === item.url ? "bg-primary text-white lg:bg-primary lg:dark:bg-primary" : "dark:bg-light_dark lg:bg-light lg:dark:bg-dark_2 bg-light"}`}
            >
              <span className="text-lg lg:text-[19px]">{item.icon}</span>
              <div className="hidden lg:block">
                <h2 className="absolute end-[.1rem] top-0 z-[-1] flex h-[50px] items-center rounded-full bg-primary pe-8 ps-8 font-medium uppercase text-white opacity-0 transition-all duration-300 lg:group-hover:pe-16 lg:group-hover:opacity-100">
                  {item.name}
                </h2>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
