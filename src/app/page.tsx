/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Carousel from "./components/carousel";

const amounts = [
  "Less than $ 10,000",
  "$40,000 – $49,999",
  "$10,000 – $19,999",
  "$50,000 – $59,999",
  "$20,000 – $29,999",
  "$60,000 – $69,999",
  "$30,000 – $39,999",
  "$70,000 – $79,999",
  "$80,000 or more",
];

const Home = () => {
  return (
    <div className="w-full font-[family-name:var(--font-poppins-regular)]">
      {/* Hero */}
      <div className="relative flex flex-col  justify-center w-full text-center bg-[url(/bg.png)] bg-center bg-cover pt-[145px] -mt-[50px]">
        <div className="absolute z-1 inset-0 bg-[rgb(23,66,115,0.9)] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="mb-[16px]">
            <h2 className="uppercase font-bold text-[32px] text-primary leading-[30px]">
              Your Better Financial <br /> Future Starts Here
            </h2>
            <p className="text-white">Stop overpaying. Start rebuilding.</p>
          </div>
          <p className="text-white font-bold">
            Experienced specialists working on your behalf
          </p>
          <p className="text-white text-[12px]">
            Clear your balances, rebuild your life — in as little as a year
          </p>
          <div className="my-[16px] text-white">
            <p className="font-bold">Select Your Debt Amount</p>
            <div className="flex flex-col px-4 sm:grid sm:grid-cols-2 mt-[12px] max-w-[700px] gap-[16px] mx-auto">
              {amounts.map((amount, i) => (
                <div
                  key={i}
                  className={`border-2 py-2 border-white ${
                    i === amounts.length - 1 ? "col-span-2" : ""
                  } hover:bg-[#0093F4] hover:border-[#0093F4]`}
                >
                  {amount}
                </div>
              ))}
              <button className="col-span-2 bg-[#BC281D] py-2.5 uppercase">
                <span className="font-[family-name:var(--font-poppins-bold)] tracking-[0.1em]">
                  Start My Application
                </span>
              </button>
            </div>
            <div className="flex justify-center my-[20px] gap-x-[70px]">
              <img
                src="/trust-pilot.svg"
                alt="Trust Pilot"
                className="h-[45px] w-auto"
              />
              <div className="h-[50] border-l-2 border-white" />
              <img
                src="/google-1.svg"
                alt="Trust Pilot"
                className="h-[45px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* How it works */}
      <div className="w-full flex flex-col items-center my-[48px]">
        <h1 className="text-[32px] font-bold text-[#1C3D5A]"> How It Works</h1>
        <div className="flex my-[24px] flex-col gap-y-[32px] items-center sm:flex-row">
          <div className="flex justify-center flex-col text-center gap-y-[16px] sm:gap-y-[32px] px-[32px]">
            <img
              src="/message.svg"
              alt="Trust Pilot"
              className="h-[45px] w-auto"
            />
            <p className="text-[14px] leading-[14px] font-bold text-[#1C3D5A]">
              Submit The Form For A <br></br> Free Consultation
            </p>
            <p className="text-[12px] leading-[14px]">
              We’ll call you in the next few minutes to talk about your options.
            </p>
          </div>
          <img
            src="/line-arrow.svg"
            alt="Trust Pilot"
            className="w-auto h-[40px] sm:w-[30px] sm:h-auto lg:w-[30px] sm:-mt-[100px] sm:rotate-270"
          />
          <div className="flex justify-center flex-col text-center gap-y-[16px] sm:gap-y-[32px] px-[32px]">
            <img
              src="/message.svg"
              alt="Trust Pilot"
              className="h-[45px] w-auto"
            />
            <p className="text-[14px] leading-[14px] font-bold text-[#1C3D5A]">
              Submit The Form For A <br></br> Free Consultation
            </p>
            <p className="text-[12px] leading-[14px]">
              We’ll call you in the next few minutes to talk about your options.
            </p>
          </div>
          <img
            src="/line-arrow.svg"
            alt="Trust Pilot"
            className="w-auto h-[40px] sm:w-[30px] sm:h-auto lg:w-[30px] sm:-mt-[100px] sm:rotate-270"
          />
          <div className="flex justify-center flex-col text-center gap-y-[16px] sm:gap-y-[32px] px-[32px]">
            <img
              src="/message.svg"
              alt="Trust Pilot"
              className="h-[45px] w-auto"
            />
            <p className="text-[14px] leading-[14px] font-bold text-[#1C3D5A]">
              Submit The Form For A <br></br> Free Consultation
            </p>
            <p className="text-[12px] leading-[14px]">
              We’ll call you in the next few minutes to talk about your options.
            </p>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="relative flex flex-col  justify-center w-full text-center bg-[url(/bg-2.png)] bg-center bg-cover pt-[145px] -mt-[50px]">
        <div className="absolute z-1 inset-0 bg-[rgba(28,61,90,0.6)] pointer-events-none"></div>
        <div className="relative z-10">{/* <Carousel /> */}</div>
      </div>
    </div>
  );
};

export default Home;
