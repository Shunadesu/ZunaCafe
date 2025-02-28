import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

const Public = () => {
  return (
    <main className="w-full max-w-[1880px] px-8 flex flex-col items-center justify-center">
        <div className="max-w-[1440px] w-full">
            <Navbar />
        </div>
        <Outlet/>
    </main>
  )
}

export default Public