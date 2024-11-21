import Image from "next/image";
import aero from "../assests/Icon.png"

const Work = () => {
    return(
        <div className="w-[1,921px] h-[574px] py-[140px] px-[180px] flex items-center bg-[#043873] justify-center ">
            <div id="heading" className=" w-full h-[294] gap-[60px] flex flex-col justify-center items-center">
                <div id="text-block" className="w-auto h-auto gap-[24px] flex flex-col items-center ">
                    <h1 id="your work" className=" w-auto h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-2%] text-[#FFFFFF] text-center ">Your work, everywhere you are</h1>
                    <p className="w-[1064px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#FFFFFF] text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available! </p>
                </div>

                <button id="Btn-get-started2" className="w-[186px] h-[63px] rounded-[6px] bg-[#4F9CF9] py-[20px] px-[40px] items-center justify-center flex gap-[10px] "> 
                    <p className="text-[#FFFFFF] font-medium text-[18px] leading-[30px] tracking-[-2%] text-nowrap">Try Taskey</p>
                    <Image src={aero} alt="aero"/>
                </button>
            </div>

        </div>
    )
}

export default Work