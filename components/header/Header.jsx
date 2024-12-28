// icons
// import { PiFlowerTulipBold } from "react-icons/pi";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { CiLogin } from "react-icons/ci";

function Header() {
    return (
        <>
            <div className=" flex justify-start w-[100%] flex-row-reverse h-[100px]">
                <ul className='flex mt-[35px] w-[36%] justify-end flex-wrap max-md:<MdOutlineMenu />'>
                    <li className='mr-[30px] cursor-pointer hover:underline underline-offset-[20px] hover:decoration-emerald-950'>خرید گل</li>
                    <li className='mr-[30px] cursor-pointer hover:underline underline-offset-[20px] hover:decoration-emerald-950'>خرید گل اپارتمانی</li>
                    <li className='mr-[30px] cursor-pointer hover:underline underline-offset-[20px] hover:decoration-emerald-950'>مناسب ها</li>
                    <li className='mr-[30px] cursor-pointer hover:underline underline-offset-[20px] hover:decoration-emerald-950'>مجله گل و گیاه</li>
                    <li className='mr-[30px] cursor-pointer hover:underline underline-offset-[20px] hover:decoration-emerald-950'>تزیینی</li>
                </ul>
                <div className='text-emerald-950 text-[50px] mt-[40px] w-[30%] justify-items-center'></div>
                <div className=" flex justify-start mt-[55px] w-[33%] ml-[30px]">
                    <div className="pr-[30px] text-[18px]"></div>
                    <div className="pr-[30px] text-[18px]"></div>
                    <div className="pr-[30px] text-[18px]"></div>
                </div >
            </div>
        </>
    )
}

export default Header