import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/Auth/selectors";
import css from "./UserMenu.module.css"
import { logout } from "redux/Auth/operations";

const UserMenu = () => {

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch(logout());
    
    }

  return (
      <div className={css.List}>
          <p>{user.email}</p>
    <button type="submit" onClick={handleLogOut} className={css.button}>Logout</button>
</div>
  );
};

export default UserMenu;