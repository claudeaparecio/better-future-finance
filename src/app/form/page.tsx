export default function Forms() {
  return (
    <div className="w-full font-[family-name:var(--font-poppins-regular)]">
      {/* Hero */}
      <div className="relative flex flex-col  justify-center w-full text-center bg-[url(/bg.png)] bg-center bg-cover pt-[52px] sm:pt-[145px] -mt-[50px]">
        <div className="absolute z-1 inset-0 bg-[rgb(23,66,115,0.9)] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="mb-[16px]">
            <h2 className="uppercase font-bold text-[19px] sm:text-[32px] mb-[40px] text-white leading-[25px] sm:leading-[30px] px-2">
              Get personalized support based on <br className="hidden sm:inline"></br> your unique financial
              situation.
            </h2>
          </div>
          {/* Input Fields */}
          <div className="flex flex-col items-center my-[24px] max-w-[500px] mx-auto gap-y-[10px] sm:gap-y-[24px] px-4">
            <input
              className="w-full bg-transparent placeholder:text-white rounded-[5px]  text-white text-[12px] border border-slate-200 px-3 py-4 transition duration-300 ease focus:outline-none"
              placeholder="First Name"
            />
            <input
              className="w-full bg-transparent placeholder:text-white rounded-[5px] text-white text-[12px] border border-slate-200 px-3 py-4 transition duration-300 ease focus:outline-none"
              placeholder="Last Name"
            />
            <input
              className="w-full bg-transparent placeholder:text-white rounded-[5px] text-white text-[12px] border border-slate-200 px-3 py-4 transition duration-300 ease focus:outline-none"
              placeholder="Phone Number"
            />
            <input
              className="w-full bg-transparent placeholder:text-white rounded-[5px] text-white text-[12px] border border-slate-200 px-3 py-4 transition duration-300 ease focus:outline-none"
              placeholder="Email Address"
            />
            <button className="col-span-2 bg-[#BC281D] py-2.5 uppercase w-full text-[12px] font-bold text-white">
              See My Custom Plan
            </button>
          </div>
          <div className="sm:w-[600px] mt-[32px] flex justify-center mx-4 sm:mx-auto">
            <p className="text-white text-[10px] text-justify sm:text-center">
              {`By clicking “Submit”, you agree that the phone number and email address you are 
            providing may be used to contact you by Better Future Finance 
            (including auto-dialed/auto-selected and prerecorded calls, as well as text/SMS messages). 
            Msg. and data rates apply, and your consent to such contact/marketing is not required for 
            purchase. Msg frequency varies; max 2 texts per day and 7 texts per week. We may also e-mail 
            you and you may let us know at any time if you are no longer interested in 
            hearing from us via a particular communication platform.`}
            </p>
          </div>
           <div className="flex justify-center my-[60px] gap-x-[70px]">
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
  );
}
