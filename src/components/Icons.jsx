import React from "react";

const Icons = ({ icons }) => {
  return (
    <div className="flex flex-row justify-center gap-5">
      {icons.map((icon, index) => (
        <img key={index} src={icon.src} width="50" height="50" alt={icon.alt} />
      ))}
    </div>
  );
};

export default Icons;
