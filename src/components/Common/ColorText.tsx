import React from "react";

const ColorText = ({
  children,
  additionalStyle,
}: {
  children: React.ReactNode;
  additionalStyle?: string;
    }) => {
  return (
    <span
      className={`text-2xl font-serif font-bold text-secondary ${ additionalStyle}`}
    >
      {children}
    </span>
  );
};

export default ColorText;
