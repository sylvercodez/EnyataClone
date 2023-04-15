import Image from "next/image";
import React from "react";

export default function Section5() {
  return (
    <div className=" mt-116 pb-12 lg:mt-32 boxs  lg:pb-26">
      <div className="main">
        <div>
          <h1 className="font-semibold text-3xl lg:text-4xl w-full lg:w-6/12 pt-32 mt-[-0.2rem] lg:leading-[3rem]">
            From Ideas to design to market-ready product.
          </h1>
          <p className="leading-[1.8rem] mt-[1.2rem] w-full lg:w-6/12 text-black">
            Our process is designed to optimise product-market fit by carving a
            multidisciplinary team to collaborate with you and deliver highly
            profitable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-12">
          <div className="bg-white p-4 lg:p-14 rounded-3xl">
            <div className="flex gap-6 items-center">
              {" "}
              <div className="h-auto relative">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/verified.svg"
                  alt=""
                  className="w-[100%]"
                />{" "}
              </div>
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Dedicated Teams
              </h1>
            </div>
            <p className="leading-[1.8rem] mt-[1.2rem] w-11/12 text-grey-tx">
              We default to dedicated teams of product, design, and engineering
              experts, but calibrate the mix to best suit the challenge at hand.
            </p>
            <div className="h-auto relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/dedicate.svg"
                alt=""
                className="w-[100%] mt-14"
              />{" "}
            </div>
          </div>
          <div className="bg-white p-4 lg:p-14  rounded-3xl">
            <div className="flex gap-6 items-center">
              {" "}
              <div className="h-auto relative">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "65px", height: "auto" }}
                  src="/agile.jpg"
                  alt=""
                  className="w-[100%]"
                />{" "}
              </div>
              <h1 className="font-semibold text-2xl lg:text-3xl">
                Agile Development
              </h1>
            </div>
            <p className="leading-[1.8rem] mt-[1.2rem] w-11/12 text-black">
              No two projects ever start from the same point, so we flex and
              adjust accordingly, optimising processes and interactions for the
              best results.
            </p>
            <div className="h-auto relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src="/dev.jpg"
                alt=""
                className="w-[100%] mt-14"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
