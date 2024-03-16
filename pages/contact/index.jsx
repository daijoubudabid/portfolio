import { ContactForm } from "@/components/ContactForm";
import { Title } from "@/components/Title";

const Contact = () => {
  return (
    <div className="blank_space">
      <Title
        backgroundName={"Contact"}
        firstName={"Get in"}
        secondName={"Touch"}
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
