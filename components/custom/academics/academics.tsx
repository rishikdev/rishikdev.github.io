import { cn } from "@/lib/utils";
import academics from "../../../public/data/academics.json";
import Card from "../card/card";
import AcademicContainer from "./academic-container";
import { Separator } from "@/components/ui/separator";

const Academics = () => {
  return (
    <Card
      header="Academics"
      body={academics.map((academic, index) => (
        <div
          key={academic.degree}
          className={cn("grid gap-4", index > 0 && "pt-2")}
        >
          <AcademicContainer
            key={academic.degree}
            degree={academic.degree}
            institution_name={academic.institution_name}
            location={academic.location}
            graduation_time={academic.graduation_time}
            has_courses={academic.has_courses}
            courses_taken={academic.courses_taken}
          />
          {index < academics.length - 1 && <Separator />}
        </div>
      ))}
    />
  );
};

export default Academics;
