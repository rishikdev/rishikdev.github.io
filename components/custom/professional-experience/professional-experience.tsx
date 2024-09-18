import { Separator } from "@/components/ui/separator";
import professional_experiences from "../../../public/data/professional_experience.json";
import Card from "../card/card";
import { cn } from "@/lib/utils";
import ProfessionalExperienceContainer from "./professional-experience-container";

const ProfessionalExperience = () => {
  return (
    <Card
      header="Professional Experience"
      body={professional_experiences.map((experience, index) => (
        <div
          key={experience.organisation}
          className={cn("grid gap-2", index > 0 && "pt-2")}
        >
          <ProfessionalExperienceContainer
            organisation={experience.organisation}
            title={experience.title}
            location={experience.location}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
          />
          {index < professional_experiences.length - 1 && <Separator />}
        </div>
      ))}
    />
  );
};

export default ProfessionalExperience;
