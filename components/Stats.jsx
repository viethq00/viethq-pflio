"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    count: 2,
    text: "Years of Experience",
  },
  {
    count: 10,
    text: "Projects Completed",
  },
  {
    count: 100,
    text: "Happy Clients",
  },
  {
    count: 50,
    text: "Cups of Coffee",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80p] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.count}
                  duration={4}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
