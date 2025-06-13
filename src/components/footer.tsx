/* eslint-disable @next/next/no-img-element */

const discosureParagraphs = [
  "*Assumes all of your debts are eligible for enrollment, are enrolled in the program, and you successfully complete the program. The majority of clients who successfully complete the program resolve their enrolled debts in 24–48 months (average 35 months).",
  "The Better Future Finance partners with trusted third-party providers (“Providers”) to offer certified financial hardship assistance. In some states, debt resolution services may be provided by Advantage Law, a DBA of Higbee & Associates. Clients who make all monthly program payments save approximately 40–50% of their enrolled debt (average of 43%) upon successful completion of the program, before program fees.",
  "Fees are based on the amount of enrolled debt at the time of enrollment and typically range from 14%–29%. Programs typically range from 20–48 months. Clients must save at least 25% of each debt due to an enrolled creditor before a bona fide settlement offer will be made. Most clients receive their first settlement within 4–7 months of enrollment and approximately every 3–6 months thereafter.",
  "Not all clients complete the program. Results vary and are based on prior performance. Providers do not guarantee specific debt reduction amounts or timelines. Providers do not assume your debts, make regular payments to creditors, or provide legal, tax, bankruptcy, or credit repair advice. These services are not available in all states. Use of the program will likely adversely affect your credit, and you may be subject to collections or legal action from creditors. Forgiven debt may be taxable.",
  "You may cancel at any time and withdraw funds from your dedicated account, minus fees earned or paid to third-party providers. Some debts and creditors may not be eligible. To evaluate options, Providers may conduct a soft credit inquiry, which does not affect your credit score or appear on your credit report.",
];
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mb-[30px] mx-auto w-[90%] sm:w-[75%] pt-[25px] sm:pt-[40px]">
      <img
        src="/logo-dark.svg"
        alt="logo-dark"
        className="object-contain h-[38px] w-[162px] sm:w-[250px] sm:h-[90px]"
      />
      <p className="font-[family-name:var(--font-poppins-regular)] text-[14px] sm:text-[15px] leading-[20px] sm:tracking-[0.135em] mt-6 mb-3 text-center">
        Better Future Finance, LLC - All Rights Reserved - Terms of Service -
        Privacy Policy
      </p>
      <div className="bg-primary h-[1px] w-full my-2 mb-4 sm:mb-2" />
      <p className="font-[family-name:var(--font-poppins-bold)] font-bold text-[12px] sm:text-[14px] leading-[20px] sm:leading-[44px] mb-2 sm:mb-[0px] text-[#757575]">
        Important Disclosure - Better Future Finance
      </p>
      <div className="flex flex-col gap-[14px] sm:gap-[18px] text-justify sm:text-center text-[11px] sm:text-[14px] leading-[14px] sm:leading-[18px] text-[#757575]">
        {discosureParagraphs.map((paragraph, i) => (
          <p
            key={`disclosure.paragraph.${i}`}
            className="font-[family-name:var(--font-poppins-regular)]"
          >
            {paragraph}
          </p>
        ))}
        <p className="font-[family-name:var(--font-poppins-bold)] font-bold">
          By submitting this form, you agree to be contacted by the Better
          Future Finance and its affiliated partners via phone, email, and text
          message regarding your inquiry. Your information will be used solely
          for communication and service purposes related to the Better Future
          Finance and its certified affiliates. Standard messaging and data
          rates may apply. You can opt out of communications at any time. Your
          personal data will not be sold or shared with unrelated third parties.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
