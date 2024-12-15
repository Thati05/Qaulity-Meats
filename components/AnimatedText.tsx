import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedTextProps = {
  className?: string;
  itemsWrapperClassName?: string;
};

const words = [
  "QUALITY", 
  "MEATS",
  "QUALITY", 
  "MEATS",
  "QUALITY", 
  "MEATS",
  "QUALITY", 
  "MEATS",
  "QUALITY", 
  "MEATS",
 
  
  
  
];

export default function AnimatedText({
  className,
  itemsWrapperClassName,
}: AnimatedTextProps) {
  return (
    <div className={` py-8 w-full overflow-x-clip  ${className || ""}`}>
      <div>
        <div className="flex">
      <div className={twMerge('flex flex-none pr-8 gap-10 py-3  [animation-duration:30s]', itemsWrapperClassName)}>
            {[...Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div
                    key={`${word}-${index}`}
                    className="inline-flex gap-4 items-center"
                  >
                    <span className="text-8xl text-crimsonRed  font-extrabold">
                      {word}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
