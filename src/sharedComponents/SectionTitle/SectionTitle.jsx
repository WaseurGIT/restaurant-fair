import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h1 className="uppercase font-bold text-orange-500 momo-signature-regular text-4xl text-center my-16">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
