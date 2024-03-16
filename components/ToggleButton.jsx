import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const DynamicMoonIcon = dynamic(
  () => import("react-icons/io").then((module) => module.IoIosMoon),
  { ssr: false },
);
const DynamicSunnyIcon = dynamic(
  () => import("react-icons/io").then((module) => module.IoIosSunny),
  { ssr: false },
);

export const ToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="fixed end-8 top-8 z-[9] flex h-[50px] w-[50px] -translate-y-1/3 cursor-pointer items-center justify-center rounded-full bg-light text-default transition-all duration-300 dark:bg-light_dark dark:text-white"
      onClick={toggleTheme}
    >
      <span className="text-3xl">
        {theme === "dark" ? <DynamicSunnyIcon /> : <DynamicMoonIcon />}
      </span>
    </button>
  );
};
