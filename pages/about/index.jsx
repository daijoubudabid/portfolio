import { Education } from "@/components/Education";
import { PersonalDetails } from "@/components/PersonalDetails";
import { Skills } from "@/components/Skills";
import { Title } from "@/components/Title";

const About = () => {
  return (
    <div className="blank_space">
      <Title backgroundName={"Resume"} firstName={"About"} secondName={"Me"} />
      <PersonalDetails />
      <Skills />
      <Education />
    </div>
  );
};

export default About;
