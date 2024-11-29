import Academics from "../academics/academics";
import ProfessionalExperience from "../professional-experience/professional-experience";
import Skills from "../skills/skills";
import Summary from "../summary/summary";

const HomePage = () => {
  return (
    <div className="grid gap-8">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-8">
        <Academics />
        <ProfessionalExperience />
      </div>
      <Skills />
    </div>
  );
};

export default HomePage;
