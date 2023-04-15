import React from "react";
import RightButton from "./images/arrowRight";
import Image from "next/image";

export default function Section8() {
  return (
    <div className=" mt-18 pb-20 lg:mt-32 bg-gray2 lg:pb-40">
      <div className="main">
        <div>
          <h1 className="font-semibold text-3xl lg:text-4xl w-full lg:w-6/12 pt-20 lg:pt-32 mt-[-0.2rem] lg:leading-[3rem]">
            Events
          </h1>
          <p className="leading-[1.8rem] w-full lg:w-5/12 text-black">
            Join our webinars and live training sessions to learn how to build
            your skills and scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 lg:gap-7 ">
          <div className="h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/events1.jpg"
              alt=""
              className="w-[100%]  mt-14 rounded-3xl "
            />
          </div>

          <div className="">
            <div className="h-auto relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/events2.jpg"
                alt=""
                className="w-[100%] h-[100%] mt-14 rounded-3xl "
              />{" "}
            </div>
          </div>
          <div className="">
            <div className="h-auto relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/events3.jpg"
                alt=""
                className="w-[100%] h-[100%]  mt-14 rounded-3xl "
              />{" "}
            </div>
          </div>
        </div>
        <button className="flex items-center bg-transparent mt-4 text-dblue2 read text-base font-bold">
          <span className="">Check out our events </span> <RightButton />
        </button>
      </div>
    </div>
  );
}
