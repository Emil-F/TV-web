"use client";
import { useEffect, useState } from "react";

type Div = {
  id: number;
  bg_color: string;
  rounded: string;
  value: number;
};

export default function Rating() {
  const [divs, setDivs] = useState<Div[]>([]);
  const [value, setValue] = useState(0);

  function createDivs(num: number) {
    const newDivs: Div[] = [];

    let test = 0;
    for (let i = 0; i < num; i++) {
      newDivs.push({
        id: i,
        bg_color: "bg-blue-300",
        rounded: i % 2 === 0 ? "rounded-l" : "rounded-r",
        value: (test += 0.5),
      });
    }
    setDivs(newDivs);
  }

  function handleOnMouseMove(index: number) {
    const newDivs: Div[] = [];
    divs.map((div, idx) => {
      newDivs.push({
        id: div.id,
        bg_color: idx < index || idx === index ? "bg-green-500" : "bg-blue-300",
        rounded: div.rounded,
        value: div.value,
      });
      if (idx === index) setValue(div.value);
    });
    setDivs(newDivs);
  }

  useEffect(() => {
    createDivs(10);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>{value}</div>
      <div className="flex">
        {divs.map((div, index) => (
          <div
            key={div.id}
            onMouseMove={() => handleOnMouseMove(index)}
            className={`${div.bg_color} ${div.rounded} w-5 h-10 ${
              div.rounded === "rounded-r" ? "mr-2" : "mr-0"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
