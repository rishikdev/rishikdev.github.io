"use client";

import certifications from "../../../public/data/certifications.json";
import Card from "../card/card";
import CardSubHeader from "../card/card-sub-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardCollection from "../card/card-collection";

const Certifications = () => {
  return (
    <CardCollection>
      {certifications.map((certificate) => (
        <Card
          key={certificate.id}
          header={certificate.title}
          body={
            <div className="flex-col divide-y">
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Description"} />
                <div className="">{certificate.description}</div>
              </div>
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Institution"} />
                <div className="text-sm text-muted-foreground">
                  {certificate.institution}
                </div>
              </div>
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Date"} />
                <div className="text-sm text-muted-foreground">
                  {certificate.completion_date}
                </div>
              </div>
            </div>
          }
          footer={
            <Button variant="outline" asChild>
              <Link href={certificate.validation_url} target="_blank">
                View Certificate
              </Link>
            </Button>
          }
        />
      ))}
    </CardCollection>
  );
};

export default Certifications;
