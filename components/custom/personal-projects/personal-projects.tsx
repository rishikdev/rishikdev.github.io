"use client";

import Link from "next/link";
import personal_projects from "../../../public/data/personal_projects.json";
import Card from "../card/card";
import { Button } from "@/components/ui/button";
import CardSubHeader from "../card/card-sub-header";
import CardCollection from "../card/card-collection";

const PersonalProjects = () => {
  return (
    <CardCollection>
      {personal_projects.map((project) => (
        <Card
          key={project.title}
          header={project.title}
          body={
            <div className="flex-col divide-y">
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Description"} />
                <div className="">{project.description}</div>
              </div>
              <div className="grid gap-2 pt-2">
                <CardSubHeader primary_header1={"Skills"} />
                <div className="">{project.skills}</div>
              </div>
            </div>
          }
          footer={
            <div className="grid grid-cols-2 text-sm text-muted-foreground">
              <Button variant="outline" className="" asChild>
                <Link
                  href={project.button_1_link}
                  target="_blank"
                  className="justify-self-start"
                >
                  {project.button_1_text}
                </Link>
              </Button>

              <Button variant="outline" className="" asChild>
                <Link
                  href={project.button_2_link}
                  target="_blank"
                  className="justify-self-end"
                >
                  {project.button_2_text}
                </Link>
              </Button>
            </div>
          }
        />
      ))}
    </CardCollection>
  );
};

export default PersonalProjects;
