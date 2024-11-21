import Image from "next/image";
import aero from "../assests/Group 212.png"
const Extension = () => {
    return (
      <>
        {" "}
        <div id="hero section" className="w-[1,921px] h-auto py-[140px] px-[220px] top-[92px] gap-[98px] bg-[#043873] flex items-center">
          <div id="heading" className="w-[697px] h-[294px] gap-[60px] flex flex-col justify-between">
            <div id="text-block" className=" w-[656px] h-[238px] text-white inline-flex flex-col gap-[24px]">
              <h2 className="font-bold w-[697px] h-[87px] font-inter text-[64px] leading-[77.45px] tracking-[=0.02cm]">Use as Extension</h2>
              <p className="w-[697px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[-2%] font-inter">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
              </p>
            </div>
            <button id="btn-free-trial" className=" w-[171px] h-[63px]  rounded-[8px] py-5 px-10 gap-[10px] text-[#FFFFFF] flex items-center justify-center bg-[#4F9CF9]"> 
                <p>Let’s Go</p>
                <Image src={aero} alt="logo" />
            </button>
          </div>
           <div className=" w-auto h-auto gap-1 flex ">
          <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
          </div>
        </div>
  
      </>
    );
  };
  export default Extension