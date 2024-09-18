"use client";

import { useEffect, useState } from "react";
import certifications from "../../../public/data/certifications.json";
import Card from "../card/card";
import CertificationCarouselCard from "./certification-carousel-card";

function calculateScale(event: React.MouseEvent<HTMLElement>) {
  const element = event.currentTarget;
  const elementXPosition = event.currentTarget.getBoundingClientRect().x;
  const noScaleZoneLeft = window.screen.width / 4;
  const noScaleZoneRight = 3 * (window.screen.width / 4);

  if (
    elementXPosition > noScaleZoneLeft &&
    elementXPosition < noScaleZoneRight
  ) {
    element.classList.remove("scale-50");
    element.classList.add("scale-100");
  } else {
    element.classList.add("scale-50");
    element.classList.remove("scale-100");
  }

  console.log(element.classList);
}

// globalThis.setInterval(() => {
//   console.log("hi");
// }, 1000);

const CertificationCarousel = () => {
  const [elementCurrentPosition, setElementCurrentPosition] = useState(0);
  useEffect(() => {}, [elementCurrentPosition]);

  return (
    <div className="p-4 grid grid-flow-col gap-2 overflow-x-scroll">
      {certifications.map((certification) => (
        <div
          key={certification.id}
          className="scale-50 transition-all duration-200"
          onClick={(e) => calculateScale(e)}
        >
          <CertificationCarouselCard title={certification.title} />
        </div>
      ))}
    </div>
  );
};

CertificationCarousel.bind(calculateScale);
// CertificationCarousel.bind(hello);

export default CertificationCarousel;
