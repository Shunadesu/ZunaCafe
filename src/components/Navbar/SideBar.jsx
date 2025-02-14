import { Link } from "react-router-dom"
import path from "../../ulities/path"

const SideBar = () => {
  return (
    <div className="flex justify-around items-center">
      <Link to={path.HOME}> HOME </Link>
      <Link to={path.DRINK}> DRINK </Link>
      <Link to={path.MENU}> MENU </Link>
      <Link to={path.BLOGS}> BLOGS </Link>
      <Link to={path.SOCIAL}> SOCIAL </Link>
    </div>
  )
}

export default SideBar