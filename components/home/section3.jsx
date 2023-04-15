import React from "react";

export default function Section3() {
  return (
    <div className="main">
      <div className="grid grid-cols-1 bg-reds bg-no-repeat p-[2rem]  lg:p-[4rem] rounded-3xl apps">
        <h1 className="font-bold text-white text-2xl lg:text-3xl  lg:leading-[4rem]">
          Application Development
        </h1>
        <p className="leading-[1.8rem] sm:w-full  lg:w-6/12 mt-[1.2rem]  text-white">
          Simplify your business process with fully functional,
          visually-compelling web and mobile applications.
        </p>
        <button className="flex items-center bg-white w-40 justify-center p-3  text-reds text-base font-light my-8 rounded-full">
          See our Process
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-9 lg:grid-cols-3">
        <div className="grid grid-cols-1 bg-yellow bg-no-repeat p-[2rem]  lg:p-[2.4rem] rounded-3xl design">
          {" "}
          <div>
            <h1 className="font-bold text-black text-2xl lg:text-3xl  ">
              Product Design
            </h1>
            <p className=" w-12/12 mt-[0.5rem] mb-8 text-black">
              Leverage design talent at scale to build customer-centric digital
              experiences.
            </p>{" "}
          </div>
          <button className="flex items-center bg-black w-40 justify-center p-3 mt-auto  text-yellow text-base font-light  rounded-full">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-1 bg-blue bg-no-repeat p-[2.4rem] rounded-3xl mobile">
          <div>
            <h1 className="font-bold text-white text-2xl lg:text-3xl  leading-[2rem]">
              Blockchain Development
            </h1>
            <p className=" w-11/12 mt-[0.8rem]  text-white">
              Build trust with your users with intricate and secure blockchain
              systems.
            </p>
          </div>
          <button className="flex items-center bg-white w-40 justify-center p-3 mt-auto  text-blue text-base font-light  rounded-full">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-1 bg-black bg-no-repeat p-[2.4rem] rounded-3xl data">
          <div>
            <h1 className="font-bold text-white text-2xl lg:text-3xl  ">
              Data Science
            </h1>
            <p className=" w-12/12 mt-[0.5rem] mb-8 text-white">
              Develop algorithms and machine learning infrastructure with our
              data scientists & engineers.
            </p>{" "}
          </div>
          <button className="flex items-center bg-black-2 w-40 justify-center p-3 mt-auto  text-white text-base font-light rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
