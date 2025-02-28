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
          className={({isActive}) => isActive ? 'uppercase transition-all ease-in text-[#ffd700]' : 'uppercase transition-all ease-in hover:text-[#ffd700]'}
          >
            {el.text}
        </NavLink>
      ))}
    </div>
  )
}

export default SideBar