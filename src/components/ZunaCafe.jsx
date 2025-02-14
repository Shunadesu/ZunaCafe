import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "../ulities/path"
import { Fail, Home } from "../pages"

const ZunaCafe = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.DRINK} element/>
        <Route path={path.FAIL} element={<Fail />}/>
      </Routes>
    </Router>
  )
}

export default ZunaCafe

        