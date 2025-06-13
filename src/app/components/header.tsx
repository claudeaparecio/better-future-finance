/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary flex flex-row justify-between items-center px-[15px] py-[8px] sm:px-[30px] sm:py-[15px] md:px-[80px] md:py-[18px]">
      <img
        src="/logo-white.svg"
        alt="logo-white"
        className="object-contain h-[25px] w-[100px] sm:w-[200px] sm:h-[40px]"
      />
      <button className="rounded-[5px] border-white border-[2px] px-[10px] md:px-[20px] py-[5px] md:py-[5px] text-white text-[14px] tracking-wide font-[family-name:var(--font-montserrat)]">
        <span className="hidden sm:inline">Call: (800) 410-7582</span>
        <span className="flex flex-row items-center sm:hidden">
          <img src="/phone.svg" alt="call-logo" className="mr-2 h-5 w-5" />
          Call Us
        </span>
      </button>
    </header>
  );
};

export default Header;
