import { useDispatch } from "react-redux";
import css from "./LogInForm.module.css"
import { login } from "redux/Auth/operations";

const LogInForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        dispatch(login({ email: form.elements.email.value, password: form.elements.password.value}));
        form.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="email" className={css.label}>Email</label>  
                <input className={css.formInput} id="email" type="email" name="email" required />
            
            <label htmlFor="password" className={css.label}> Password   </label>
                <input className={css.formInput} id="password" type="password" name="password" required />
          
            <button className={css.button} type="submit">Log In</button>
        </form>
    )
}

export default LogInForm;