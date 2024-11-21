import Image from "next/image";
import aero from "../assests/Group 212.png"
const Customise = () => {
    return (
        <div id="coustomise your needs" className=" w-[1,921px] h-[812.09px] py-[140px] px-[220px] top-[92px] gap-[98px] flex items-center ">
               <div id="Image container" className="w-[714px] h-[532.09px] gap1 flex bg-[#C4DEFD] "></div>
                <div id="heading" className=" w-[669px] h-auto gap-[60px] flex flex-col ">
                <div id="text-block" className=" w-full h-auto gap-[24px] flex flex-col">
                    <p id="work togather" className="w-[679px] h-[174px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-2%] text-[#212529] ">Customise it
                    to your needs</p>
                    <p className="w-[669px] h-[90px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                </div>
                <button id="Btn-get-started2" className="w-[186px] h-[63px] rounded-[6px] bg-[#4F9CF9] py-[20px] px-[40px] items-center justify-center flex gap-[10px] "> 
                    <p className="text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-2%] text-nowrap">Let’s Go</p>
                    <Image src={aero} alt="aero"/>
                </button>
             </div>
            </div>
    )
}

export default Customise