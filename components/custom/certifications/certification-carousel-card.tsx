// pages/index.tsx
import { useState, useEffect, useRef } from "react";
import certifications from "../../../public/data/certifications.json";
import Card from "../card/card";
import CertificationCarousel from "./certification-carousel";

interface CertificationCarouselCardProps {
  title: string;
}

const CertificationCarouselCard = ({
  title,
}: CertificationCarouselCardProps) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <div className="p-4 grid gap-2" ref={containerRef}>
      <Card body={title} className="w-40 h-40 content-center" />
      {isVisible && <div className="">visible</div>}
    </div>
  );
};

export default CertificationCarouselCard;
