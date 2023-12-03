import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/Auth/operations";
import { selectIsRefreshing } from "redux/Auth/selectors";
import { lazy, useEffect } from "react";

import Navigation from "./Navigation/Navigation";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Contacts = lazy(() => import("pages/Contacts/Contacts"));

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
      <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/contacts"/>} />
      <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/contacts"/>}/>
      <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo="/login"/>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes> ) }
  

</>
  )
  
}