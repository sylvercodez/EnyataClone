import Image from "next/image";
import React from "react";

export default function Section9() {
  return (
    <div className=" bg-white pb-18 lg:pb-32">
      <div className="main">
        <div>
          <h1 className="font-semibold text-3xl lg:text-4xl w-full lg:w-5/12 pt-8 lg:pt-20 lg:leading-[3rem]">
            Our presence is felt globally
          </h1>
          <p className="leading-[1.8rem] w-full lg:w-4/12 pb-10 lg:pb-24 text-black">
            Our teams are based in 4 countries, and we help businesses around
            the world build solutions that create impact.
          </p>
        </div>

        <div className="h-auto relative">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/map.gif"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
