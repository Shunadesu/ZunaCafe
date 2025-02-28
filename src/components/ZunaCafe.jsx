import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "../ulities/path"
import { Fail, Home, Login, Public } from "../pages"

const ZunaCafe = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />}/>
        </Route>
        <Route path={path.FAIL} element={<Fail />}/>
      </Routes>
    </Router>
  )
}

export default ZunaCafe

        