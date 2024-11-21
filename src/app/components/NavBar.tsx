import Image from "next/image"
import logo from "../assests/Logo.png"
const NavBar=()=>{
    return(
        <>
        <div id="header" className=" w-[1,920px] h-[92px] py-4 px-[220px] bg-[#043871] flex justify-between items-center ">
            <div id="logo" className=""> <Image src={logo} alt="logo" /></div>
            <div id="frame 375" className="w-[737px] h-[60px] gap-[60px] flex items-center  ">
                <div className="w-[549px] h-[23px] ">
                    <ul className="flex flex-row justify-center items-center gap-5 text-white">
                         <li>Product</li>
                         <li> solution</li>
                         <li> resource</li>
                         <li> pricing</li>
                    </ul>

                </div>
                <div className="w-auto h-[60px]">
                    <button className="px-[40px] py-[16px] rounded-lg bg-yellow-200">login</button>
                </div>
            </div>

        </div>
        </>
    )
}
export default NavBar