import CardSubHeader from "../card/card-sub-header";

interface ProfessionalExperienceContainerProps {
  organisation: React.ReactNode;
  title: React.ReactNode;
  location: React.ReactNode;
  duration: React.ReactNode;
  responsibilities: string[];
}

const ProfessionalExperienceContainer = ({
  organisation,
  title,
  location,
  duration,
  responsibilities,
}: ProfessionalExperienceContainerProps) => {
  return (
    <div className="grid gap-2">
      <CardSubHeader
        primary_header1={organisation}
        primary_header2={title}
        secondary_header1={location}
        secondary_header2={duration}
        className=""
      />
      <ul className="list-disc">
        {responsibilities.map((responsibility) => (
          <li key={responsibility} className="ml-5">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalExperienceContainer;
