import Academics from "../academics/academics";
import ProfessionalExperience from "../professional-experience/professional-experience";
import Skills from "../skills/skills";
import Summary from "../summary/summary";

const HomePage = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="col-span-1">
        <div className="grid gap-8">
          <Summary />
          <Skills />
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="grid gap-8">
          <Academics />
          <ProfessionalExperience />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
