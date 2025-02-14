import NavbarContent from "./NavbarContent"
import SideBar from "./SideBar"

const Navbar = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex sticky inset-0 min-h-[100px] items-center">
        <NavbarContent />
      </div>

      <div className="border-y border-gray-200 py-4">
        <SideBar />
      </div>
    </div>
  )
}

export default Navbar