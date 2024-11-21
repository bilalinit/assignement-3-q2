import Image from "next/image"
import google from "../assests/Google.png"
import apple from "../assests/Apple.png"
import microsoft from "../assests/Microsoft.png"
import slack from "../assests/Slack.png"

const sponsors = ()=>{
    return(
        <div id="our-sponsors" className=" w-[1,922px] h-auto  py-[140px] px-[220px] gap-[100px] flex flex-col items-center" >
            <p id=" text" className=" w-[1482px] h-[87px]  text-[72px] font-inter font-bold leading-[87.14px] tracking-[-2%]  text-[#212529] text-center">Our sponsors</p>
        <div id="sponsors" className="w-full h-auto justify-between flex">
            <Image src={apple} alt="apple logo"/>
            <Image src={microsoft} alt="microsoft logo"/>
            <Image src={slack} alt="slack logo"/> 
            <Image src={google} alt="google logo"/>
        </div>
        </div>
    )
}

export default sponsors