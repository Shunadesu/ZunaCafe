import { NavLink } from "react-router-dom"
import navdata from "../../ulities/data/navbar/navbardata" 
const SideBar = () => {
  return (
    <div className="flex justify-around items-center">
      {navdata.map(el => (
        <NavLink 
          to={el.path}
          key={el.id}
          // isActive cua NavLink
          className={({isActive}) => isActive ? 'uppercase transition-all ease-in text-[#020216]' : 'uppercase transition-all ease-in hover:text-[#020216] hover:opacity-100 opacity-50'}
          >
            {el.text}
        </NavLink>
      ))}
    </div>
  )
}

export default SideBar