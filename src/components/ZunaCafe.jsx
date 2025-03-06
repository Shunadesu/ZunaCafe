import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "../ulities/path"
import { Fail, Home, Login, Public } from "../pages"
import {getCategories} from '../store/asyncActions'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ZunaCafe = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  },[dispatch])

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

        