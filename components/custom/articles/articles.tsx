"use client";

import articles from "../../../public/data/articles.json";
import Card from "../card/card";
import CardSubHeader from "../card/card-sub-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardCollection from "../card/card-collection";
import { Badge } from "@/components/ui/badge";

const Articles = () => {
  return (
    <CardCollection>
      {articles.map((article) => (
        <Card
          key={article.id}
          header={article.title}
          body={
            <div className="flex-col divide-y">
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Abstract"} />
                <div className="">{article.description}</div>
              </div>
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Date"} />
                <div className="text-sm text-muted-foreground">
                  {article.date}
                </div>
              </div>
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Keywords"} />
                <div className="flex flex-col text-sm text-muted-foreground">
                  {article.keywords.map((keyword) => (
                    <div>{keyword}</div>
                  ))}
                </div>
              </div>
            </div>
          }
          footer={
            <div className="flex justify-between text-sm text-muted-foreground">
              {article.buttons.map((button) => (
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

export default Articles;
