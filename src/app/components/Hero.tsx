import Image from "next/image";
import aero from "../assests/Group 212.png"
const Hero = () => {
    return (
      <>
        {" "}
        <div id="hero section" className="w-[1,920px] py-[140px] px-[220px] top-[92px] bg-[#043873] flex items-center">
          <div id="heading" className="w-[656px] h-[361px] gap-[60px] flex flex-col justify-between">
            <div id="text-block" className=" w-[656px] h-[238px] text-white inline-flex flex-col gap-[24px]">
              <h2 className="font-bold w-[656px] h-[154px] font-inter text-[64px] leading-[77.45px] tracking-[=0.02cm]">Get More Done with whitepace</h2>
              <p className="font-normal text-[18px] leading-[30px] tracking-[-2%] font-inter">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
              </p>
            </div>
            <button id="btn-free-trial" className=" h-[63px] w-[219px] rounded-[8px] p-5 gap-[10px] text-[#FFFFFF] flex items-center justify-center bg-[#4F9CF9]"> 
                <p>Try Whitepace free</p>
                <Image src={aero} alt="logo" />
            </button>
          </div>
          <div className="w-[824px] h-[559px] gap-1 bg-[#C4DEFD]"></div>
        </div>
  
      </>
    );
  };
  export default Hero