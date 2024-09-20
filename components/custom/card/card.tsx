"use client";

import { cn } from "@/lib/utils";
import React from "react";
import CardBody from "./card-body";
import CardHeader from "./card-header";
import CardFooter from "./card-footer";

interface CardProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Card = ({
  header = undefined,
  body = undefined,
  footer = undefined,
  className = "",
}: CardProps) => {
  const shadow = "shadow-[rgba(0,_0,_0,_0.24)_0px_0px_5px]";

  return (
    <div
      className={cn(
        "p-2 grid content-between divide-y bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-950 rounded-lg",
        className,
        shadow
      )}
    >
      <div className="grid content-start divide-y">
        {header && <CardHeader header={header} />}
        {body && <CardBody body={body} />}
      </div>
      {footer && <CardFooter footer={footer} />}
    </div>
  );
};

export default Card;
