import { Separator } from "./Separator";

const progressData = [
  {
    percent: "95%",
    name: "Html",
    calc: "calc(400 - (400 * 58) / 100)",
  },
  {
    percent: "70%",
    name: "Javascript",
    calc: "calc(400 - (400 * 45) / 100)",
  },
  {
    percent: "90%",
    name: "Css",
    calc: "calc(400 - (400 * 55) / 100)",
  },
  {
    percent: "75%",
    name: "React",
    calc: "calc(400 - (400 * 50) / 100)",
  },
  {
    percent: "90%",
    name: "Tailwind",
    calc: "calc(400 - (400 * 55) / 100)",
  },
  {
    percent: "90%",
    name: "Bootstrap",
    calc: "calc(400 - (400 * 55) / 100)",
  },
  {
    percent: "60%",
    name: "NextJs",
    calc: "calc(400 - (400 * 40) / 100)",
  },
  {
    percent: "90%",
    name: "Sass",
    calc: "calc(400 - (400 * 55) / 100)",
  },
];

export const Skills = () => {
  return (
    <div>
      <div className="container px-4 pb-5">
        <div className="grid grid-cols-1">
          <h3 className="pb-[1.5rem] text-start text-[1.35rem] font-semibold uppercase text-default dark:text-white sm:text-center sm:text-[1.65rem]">
            My Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-y-20 md:grid-cols-4">
          {progressData.map((item, index) => (
            <div
              key={index}
              className="relative mx-auto h-28 w-28 text-center sm:h-[8.5rem] sm:w-[8.5rem]"
            >
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  className="stroke-current text-gray-200 dark:text-[#1a1a1a]"
                  strokeWidth="6"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="progress-ring__circle  stroke-current text-primary"
                  strokeWidth="6"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDashoffset={item.calc}
                />
                <text
                  x="50"
                  y="50"
                  fontSize="16"
                  fill="currentColor"
                  fontWeight="600"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className="text-default dark:text-white"
                >
                  {item.percent}
                </text>
              </svg>
              <h5 className="mt-3 font-open-sans uppercase text-default dark:text-white">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );
};
