import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

const Public = () => {
  return (
    <main className="w-full max-w-[1680px] px-8">
        <div>
            <Navbar />
        </div>
        <Outlet/>
    </main>
  )
}

export default Public