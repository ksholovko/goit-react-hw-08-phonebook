import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import Contacts from "pages/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/Auth/operations";
import { selectIsRefreshing } from "redux/Auth/selectors";
import { useEffect } from "react";

export function App() {
   
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  
  return (
  <>
  
  { !isRefreshing && (<Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/contacts" element={<Contacts/>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes> ) }
  

</>
  )
  
}