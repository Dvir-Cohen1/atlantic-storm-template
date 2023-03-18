import React from "react";

const LatestTitle = ({ firstWord = "latest", secondWord = "" }) => {
  return (
    <p className="font-semibold mb-3 tracking-widest uppercase">
      <span className="text-primary">{firstWord}</span> {secondWord}
    </p>
  );
};

export default LatestTitle;
