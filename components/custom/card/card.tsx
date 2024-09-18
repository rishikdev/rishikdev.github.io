"use client";

import { cn } from "@/lib/utils";
import React from "react";
import CardBody from "./card-body";
import CardHeader from "./card-header";
import CardFooter from "./card-footer";

interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  className: string;
}

const cardPropsDefaultValues: CardProps = {
  header: undefined,
  body: undefined,
  footer: undefined,
  className: "",
};

const Card = ({ header, body, footer, className }: CardProps) => {
  const shadow = "shadow-[rgba(0,_0,_0,_0.24)_0px_0px_5px]";

  return (
    <div
      className={cn(
        "p-2 grid content-between divide-y bg-neutral-300/50 dark:bg-neutral-800/50 border border-neutral-300/50 dark:border-neutral-700/50 rounded-lg backdrop-blur-sm",
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

Card.defaultProps = cardPropsDefaultValues;

export default Card;
