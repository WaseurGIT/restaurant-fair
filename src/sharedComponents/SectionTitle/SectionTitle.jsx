import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, []);

  return (
    <div>
      <h1
        ref={titleRef}
        className="uppercase font-bold text-orange-500 momo-signature-regular text-4xl text-center my-16"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
