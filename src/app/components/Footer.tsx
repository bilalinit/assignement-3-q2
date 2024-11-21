import Image from "next/image";
import logo from "@/app/assests/Logo.png";

const Footer = () => {
    return (
        <footer className="w-[1,920px] h-[461px] pt-[140px] pb-[32px] px-[220px] flex flex-col gap-[200px] bg-[#043873]">
            <div id="content" className="w-[1,480px] h-[289px] gap-[100px] flex flex-col">
                <div id="info" className="w-[1,480px] h-[169px] flex gap-[100px]">
                    <div id="logo discription" className="w-[295px] h-[169px] gap-[15px] flex flex-col">
                        <div id="logo" className="w-[169px] h-[34px]">
                            <Image src={logo} alt="white space logo" />
                        </div>
                        <p className="w-[240px] h-[120px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>
                    <div id="info2" className="w-[295px] h-auto flex flex-col gap-[15px]">
                        <p className="font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white">Product</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-[#FFE492]">Overview</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Pricing</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Customer stories</p>
                    </div>
                    <div id="info3" className="w-[295px] h-auto flex flex-col gap-[16px]">
                        <p className="font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white">Resources</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Blog</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Guides & tutorials</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Help center</p>
                    </div>
                    <div id="info4" className="w-[295px] h-auto flex flex-col gap-[16px]">
                        <p className="font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-white">Resources</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Blog</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Guides & tutorials</p>
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">Help center</p>
                    </div>
                </div>
                {/* <div className="w-[1,480px] border border-[#2E4E73] "></div> */}
                <div id="btm" className="w-[1,480px] h-auto justify-between ">
                    <div id="Tems and condition" className=" w-auto h-auto gap-[60px] flex items-center justify-center">
                        <p className="font-inter font-normal text-[16px] leading-5 tracking-[-2%] text-white">©2021 Whitepace LLC.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
