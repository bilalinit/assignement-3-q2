import Image from "next/image";
import aero from "../assests/Icon.png"
import work from "../assests/Work Together Image.png"

const Management = () => {
    return (
        <div id="Work-management" className="w-[1,920px] h-auto py-[140px] px-[220px] flex flex-col gap-[100px] text-[#212529]">
            <div id="content" className="w-full h-auto items-center flex gap-[60px]">
                <div id="Headline" className="w-[672px] h-auto flex flex-col gap-[60px]">
                    <div id="text-block" className="w-full h-auto flex flex-col gap-[24px]">
                        <p className="w-[672px] h-[174px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-2%]">
                            Project Management
                        </p>
                        <p className="w-[672px] h-[90px] font-normal text-[18px] leading-[30px] tracking-[-2%]">
                            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p>
                    </div>
                    <button id="Btn-get-started" className="w-[201px] h-[63px] rounded-[6px] bg-[#4F9CF9] py-[20px] px-[40px] items-center justify-center flex gap-[10px] ">
                        <p className=" w-[97px] h-[23px] text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-2%] text-nowrap ">Get Started</p>
                        <Image src={aero} alt="aero"/>
                    </button>
                </div>
                <div id="Image-container" className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
            </div>
            <div id="content2" className="w-full h-auto gap-[100px] flex items-center ">
               <div id="work-togather-img" className=" w-[710px] h-[661px] "><Image src={work} alt="work"/></div>
                <div id="headline" className=" w-[670px] h-auto gap-[60px] flex flex-col ">
                <div id="text-block">
                    <p id="work togather" className="w-[670px] h-[87px] text-[72px] font-inter font-bold leading-[87.14px] tracking-[-2%]">Work together</p>
                    <p className="w-full h-auto font-inter font-normal text-[18px] leading-[30px] tracking-[-2%]">With whitepace, share your notes with your colleagues and collaborate on them.
                       You can also publish a note to the internet and share the URL with others.</p>
                </div>
                <button id="Btn-get-started2" className="w-[186px] h-[63px] rounded-[6px] bg-[#4F9CF9] py-[20px] px-[40px] items-center justify-center flex gap-[10px] "> 
                    <p className="text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-2%] text-nowrap">Get Started</p>
                    <Image src={aero} alt="aero"/>
                </button>
             </div>
            </div>
        </div>
    );
};

export default Management;
