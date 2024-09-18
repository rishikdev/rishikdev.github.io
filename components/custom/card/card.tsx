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
  const shadow = "shadow-[rgba(0,_0,_0,_0.24)_0px_0px_15px]";

  return (
    <div
      className={cn(
        "p-2 grid content-between divide-y bg-slate-300/20 dark:bg-slate-700/20 rounded-md backdrop-blur-md",
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
