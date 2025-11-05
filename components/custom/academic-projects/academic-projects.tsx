"use client";

import Link from "next/link";
import academic_projects from "../../../public/data/academic_projects.json";
import Card from "../card/card";
import { Button } from "@/components/ui/button";
import CardSubHeader from "../card/card-sub-header";
import CardCollection from "../card/card-collection";
import { Badge } from "@/components/ui/badge";

const AcademicProjects = () => {
  return (
    <CardCollection>
      {academic_projects.map((project) => (
        <Card
          key={project.id}
          header={project.title}
          body={
            <div className="flex-col divide-y">
              <div className="grid gap-2 pb-2">
                <CardSubHeader
                  primary_header1={
                    <div className="flex gap-2 justify-between">
                      <div>{"Description"}</div>
                      <div className="flex gap-2 justify-between">
                        {project.genres.map((genre) => (
                          <Badge className="bg-blue-500 text-white dark:bg-blue-600 cursor-default text-center">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  }
                />
                <div className="">{project.description}</div>
              </div>
              <div className="grid gap-2 pt-2">
                <CardSubHeader primary_header1={"Skills"} />
                <div className="">{project.skills}</div>
              </div>
            </div>
          }
          footer={
            <div className="flex justify-between text-sm text-muted-foreground">
              {project.buttons.map((button) => (
                <Button variant="outline" className="" asChild>
                  <Link href={button.button_link} target="_blank" className="">
                    {button.button_text}
                  </Link>
                </Button>
              ))}
            </div>
          }
        />
      ))}
    </CardCollection>
  );
};

export default AcademicProjects;
