import { Projects } from "@/components/Projects";
import { Title } from "@/components/Title";

const Portfolio = () => {
  return (
    <div className="blank_space">
      <Title
        backgroundName={"Works"}
        firstName={"My"}
        secondName={"Portfolio"}
      />
      <Projects />
    </div>
  );
};

export default Portfolio;
