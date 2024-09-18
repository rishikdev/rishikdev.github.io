"use client";

import { useEffect, useState } from "react";
import summaries from "../../../public/data/summaries.json";
import Card from "../card/card";

const Summary = () => {
  const [summary, setSummary] = useState("");
  useEffect(getRandomSummary, []);

  function getRandomSummary() {
    const randomIndex = Math.floor(Math.random() * summaries.length);
    setSummary(summaries[randomIndex].summary);
  }

  return <Card header="Summary" body={summary} />;
};

export default Summary;
