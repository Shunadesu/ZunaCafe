import { Link } from "react-router-dom"
import icons from "../../ulities/icons/icons"
const Fail = () => {
    const {CiHome} = icons
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen text-center">
        <h1 className="text-[64px] font-bold text-red-600">Error !!!</h1>
        <p className="text-lg text-gray-500 mt-2">Không tìm thấy địa chỉ này</p>
        <Link to="/" className="flex gap-2 text-[18px] items-center px-6 py-2 transition">
            Về nhà thôi 
            <CiHome />
        </Link>
    </div>
  )
}

export default Fail