import React from "react";
import Image from "next/image";
import Right from "./images/arrow-right";
import Typewriter from "typewriter-effect";
export default function Section1() {
  return (
    <div className="mains ">
      <button className="flex items-center bg-grey p-2 text-grey-tx text-sm font-medium rounded-full">
        BuildUp 3.0 is happening!!! 🎉 Register here <Right />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex">
          <div>
            <h1 className="font-bold text-3xl  lg:text-5xl  mt-[-0.2rem] lg:leading-[4rem]">
              Build and ship
            </h1>
            <h1 className="font-bold text-3xl  lg:text-5xl w-80 lg:leading-[4rem] text-purple">
              <Typewriter
                options={{
                  strings: [
                    "scalable products",
                    "reliable products",
                    "robust products",
                    "efficient products",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1 className="font-bold text-3xl  lg:text-5xl w-full sm:w-80 lg:leading-[4rem]">
              with on-demand engineering teams.
            </h1>
            <p className="w-full sm:w-10/12 leading-[1.5rem] text-grey-2">
              Leverage Enyata&apos;s world-class engineering teams to get your
              ideas and projects up and running quickly.
            </p>
            <button className="flex items-center bg-purple w-full  sm:w-40 justify-center p-4  text-white text-base font-extrabold my-8 rounded-full">
              Let&apos;s Talk
            </button>
          </div>

          <Image
            src="/arrow.svg"
            width={100}
            className="hidden md:block mt-[11rem] "
            height={100}
            alt="home"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/hero1.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
}
