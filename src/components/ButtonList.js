import React from "react";
import Button from "./Button";
const buttonListNames = [
  "All",
  "Music",
  "Javascript",
  "cricket",
  "movies",
  "actress",
  "news",
  "polical",
  "cricket",
  "movies",
  "actress",
];

const ButtonList = () => {
  return (
    <ul className="flex gap-2 overflow-x-auto">
      {buttonListNames.map((item, index) => (
        <Button key={index} buttonName={item} />
      ))}
    </ul>
  );
};

export default ButtonList;
