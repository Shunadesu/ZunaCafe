import { Link } from "react-router-dom"
import path from "../../ulities/path"
import icons from "../../ulities/icons/icons"
import SearchInput from "../Input/SearchInput"

const NavbarContent = () => {

    const {CiShoppingCart} = icons

  return (
    <div className="w-full grid grid-cols-3 items-center text-[13px] tracking-[3px]">
        {/* Phone */}
        <div className="col-span-1 ">
            Hotline: <a href="tel:0523372202">0523372202</a>
        </div>

        {/* Logo */}
        <div className="col-span-1">
            <Link
                to={path.HOME}
                className="group flex flex-col justify-center items-center tracking-[0px]"
            >
                <div className="text-4xl font-semibold">
                    Zuna Cafe
                </div>
                <div className="text-[14px] italic opacity-90 bg-gradient-to-r from-[#ffd700] to-[#020216] bg-clip-text text-transparent gradient-text">
                    Day and Night Story
                </div>
            </Link>
        </div>

        <div className="col-span-1 flex justify-end gap-16 items-center">
            <Link to={path.LOGIN}>
                TÀI KHOẢN 
            </Link>

            <div className="flex items-center gap-2">
                GIỎ HÀNG
                <CiShoppingCart className="pb-0.5 text-[16px]" />
            </div>
            
            <div className="">
                <SearchInput />
            </div>
        </div>
    </div>
  )
}

export default NavbarContent