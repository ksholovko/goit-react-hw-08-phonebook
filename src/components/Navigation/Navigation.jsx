import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Navigation.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "redux/Auth/selectors";
import UserMenu from "components/UserMenu/UserMenu";

const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      <>
    <header className={css.HeaderStyle}>
    <nav>
        <ul className={css.List}>            
                      <li><NavLink to="/">Home</NavLink></li>
                      {isLoggedIn &&  <li> <NavLink to="/contacts">Contacts</NavLink></li>}
       
        </ul>          
    </nav>
            
              {!isLoggedIn ? ( <nav>
        <ul className={css.List}>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
    </nav> ) : <UserMenu/> }
    

          </header>
          <main className="container">
    <Suspense fallback={<div className="indicator">Loading...</div>}>
        <Outlet />
              </Suspense>
          </main>
    </>
  );
};

export default Navigation;