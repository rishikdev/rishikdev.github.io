import skills from "../../../public/data/skills.json";
import Card from "../card/card";

const Skills = () => {
  return (
    <ul className="grid lg:grid-cols-4 gap-8 list-disc">
      {skills.map((skill) => (
        <Card
          key={skill.category}
          header={skill.category}
          body={skill.items.map((item) => (
            <li key={item} className="ml-5">
              {item}
            </li>
          ))}
        />
      ))}
    </ul>
  );
};

export default Skills;
