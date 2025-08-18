"use client";

import articles from "../../../public/data/articles.json";
import Card from "../card/card";
import CardSubHeader from "../card/card-sub-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardCollection from "../card/card-collection";

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
                <CardSubHeader primary_header1={"Description"} />
                <div className="">{article.description}</div>
              </div>
              <div className="grid gap-2 pb-2">
                <CardSubHeader primary_header1={"Date"} />
                <div className="text-sm text-muted-foreground">
                  {article.date}
                </div>
              </div>
            </div>
          }
          footer={
            <div className="grid grid-cols-2 text-sm text-muted-foreground">
              <Button variant="outline" asChild>
                <Link
                  href={article.view_url}
                  target="_blank"
                  className="justify-self-start"
                >
                  View Article
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href={article.download_url}
                  target="_blank"
                  className="justify-self-end"
                >
                  Download Article
                </Link>
              </Button>
            </div>
          }
        />
      ))}
    </CardCollection>
  );
};

export default Articles;
