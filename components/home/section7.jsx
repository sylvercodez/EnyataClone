import React from "react";
import RightButton from "./images/arrowRight";
import Image from "next/image";

export default function Section7() {
  return (
    <div className="main pt-14 pb:14 lg:pt-24 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ">
        <div className="h-auto relative">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/service.jpg"
            alt=""
            className="w-[100%]"
          />
        </div>
        <div>
          <h1 className="font-semibold text-2xl lg:text-3xl mt-[-0.2rem] lg:leading-[3rem]">
            Service Highlight
          </h1>
          <p className="leading-[1.8rem] mt-4 font-light text-black">
            We deliver incredible mobile experiences with native iOS and Android
            apps. And when it comes to cross-platform solutions, our expertise
            and technology provide a good balance between development efficiency
            and the performance and feel of a native application. With our help,
            your ideas are transported from vision to version.
          </p>
          <button className="flex items-center bg-transparent mt-4 text-dblue2 read text-base font-bold">
            <span className="">Check out our Services </span> <RightButton />
          </button>
        </div>
      </div>
    </div>
  );
}
