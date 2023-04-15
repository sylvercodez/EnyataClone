import React from "react";
import RightButton from "./images/arrowRight";
import Image from "next/image";

export default function Section4() {
  return (
    <div className="main">
      <div>
        <h1 className="font-semibold text-3xl lg:text-4xl  mt-[-0.2rem] lg:leading-[3rem]">
          Case Studies
        </h1>
        <p className="leading-[1.8rem] mt-[1.2rem]  text-black">
          Some of the projects we have designed and built for our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-12">
        <div>
          <div className="h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/permit.jpg"
              alt="presmit"
              className="w-[100%]"
            />
          </div>
          <p className="leading-[1.8rem]  mt-[1.2rem]  text-black">
            <b>Presmit</b> - A user-centric platform designed for you to trade,
            buy and sell various digital assets including gift cards, bitcoins,
            USDT, litecoins, dogecoins, airtime and data topup.
          </p>
        </div>
        <div>
          <div className="h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/volly.jpg"
              alt="presmit"
              className="w-[100%]"
            />
          </div>

          <p className="leading-[1.8rem] mt-[1.2rem]  text-black">
            <b>Volley - </b>Volley help B2B companies talk to their prospects by
            scaling personalized and hyper-relevant outreach.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-16">
        <div>
          <div className="h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/kafene.jpg"
              alt="presmit"
            />
          </div>
          <p className="leading-[1.8rem]  mt-[1.2rem]  text-black">
            <b>Kafene</b> - Kafene Is a digital web and app-based lease to own
            platform that helps all consumers buy the things they want over
            time, affordably.
          </p>
          <button className="flex items-center bg-transparent text-dblue read text-base font-medium ">
            <span className="block">Read Case Study </span> <RightButton />
          </button>
        </div>
        <div>
          <div className="h-auto relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/care.jpg"
              alt="presmit"
              className="w-[100%]"
            />
          </div>

          <p className="leading-[1.8rem] mt-[1.2rem]  text-black">
            <b>Care click </b>- Customized lease options add flexibility and
            affordability to your life. Get the products you want without having
            to pay for it all upfront.
          </p>
          <button className="flex items-center bg-transparent text-dblue read text-base font-normal rounded-full">
            <span className="block">Read Case Study </span> <RightButton />
          </button>
        </div>
      </div>
      <button className="bg-transparent text-black flex m-auto text-2xl   font-bold ">
        <span className="block mt-12">View more case studies</span>
      </button>
    </div>
  );
}
