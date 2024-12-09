"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    count: 3,
    text: "Years of Experience",
  },
  {
    count: 6,
    text: "Projects Completed",
  },
  {
    count: 5,
    text: "Happy Clients",
  },
  {
    count: 2,
    text: "Languages Spoken: English, Vietnamese",
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
                  duration={2.5}
                  delay={1.2}
                  className="text-4xl xl:text-6xl font-extrabold "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[200px]"
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
