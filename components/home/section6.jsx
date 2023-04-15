import React from "react";
import RightButton from "./images/arrowRight";
import Image from "next/image";

export default function Section6() {
  return (
    <div className=" mt-20 pb-12 lg:mt-32  bg-gray2 lg:pb-32">
      <div className="main">
        <div>
          <h1 className="font-semibold text-3xl lg:text-4xl w-full lg:w-6/12 pt-20 lg:pt-32 mt-[-0.2rem] lg:leading-[3rem]">
            Our Blog
          </h1>
          <p className="leading-[1.8rem]  w-full lg:w-5/12 text-black">
            Explore our library of expert knowledge - everything from skill
            development to business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="">
          <div className="h-auto relative">
         <Image  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
              src="/blog2.jpg"
              alt=""
              className="w-[100%] h-[250px] mt-14"
            /></div>
            <h4 className="leading-[1.5rem] font-semibold text-base mt-7 w-11/12 text-black">
              How Frontend Development Is Applicable In Everyday Life
            </h4>
            <p className="leading-[1.8rem]  text-base w-11/12 text-gray">
              Article by Ammiel Gyan Yawson — Frontend Engineer at Enyata Ghana
              Image of staff at EnyataWhat is front-end...
            </p>
            <div className="flex gap-4 items-center mt-4">
            <button className='flex items-center bg-grey p-2 text-grey-tx text-[12px] font-medium rounded-full'>
        Business development
        </button> <p className="text-black-2 text-sm">2 mins read</p>
            </div>
          </div>
          <div className="">
            <div className="">
            <div className="h-[250px] relative">
         <Image  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: '250px' }}
                src="/blog1.jpg"
                alt=""
                className=" mt-14"
              />{" "}
              </div>
            </div>
            <h4 className="leading-[1.5rem] font-semibold text-base mt-7 w-11/12 text-black">
              Business Fundamentals &amp; Investor Engagement in 2023
            </h4>
            <p className="leading-[1.8rem]  text-base w-11/12 text-gray">
              Understanding business fundamentals that investors love… Enyata
              Business Series — Business Fundamentals & Investor... Business
              Development
            </p>
            <div className="flex gap-4 items-center mt-4">
            <button className='flex items-center bg-grey p-2 text-grey-tx text-[12px] font-medium rounded-full'>
    Business development
        </button> <p className="text-black-2 text-sm">1 mins read</p>
            </div>
          </div>
          <div className="">
            <div className="h-[250px]">
            <div className="h-auto relative">
         <Image  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
                src="/blog3.jpg"
                alt=""
                className="w-[100%] h-[100%]  mt-14"
              />{" "}
              </div>
            </div>
            <h4 className="leading-[1.5rem] font-semibold text-base mt-7 w-11/12 text-black">
              THE MINIMALIST APPROACH TO DESIGN
            </h4>
            <p className="leading-[1.8rem]  text-base w-11/12 text-gray">
              Enyata designers at workIt’s common for people to associate
              minimalism with emptiness or “scantiness,” although this is...
            </p>
            <div className="flex gap-4 items-center mt-4">
            <button className='flex items-center bg-grey p-2 text-grey-tx text-[12px] font-medium rounded-full'>
        Sales development
        </button> <p className="text-black-2 text-sm">2 mins read</p>
            </div>
          </div>
        </div>
        <button className='flex items-center bg-transparent mt-4 text-dblue2 read text-base font-bold'>
      <span className="">Check out our blog </span>  <RightButton />
        </button>
      </div>
    </div>
  );
}
