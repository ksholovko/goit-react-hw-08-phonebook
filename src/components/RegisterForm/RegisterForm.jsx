import { useDispatch } from "react-redux";
import { register } from "redux/Auth/operations";

import css from "./RegisterForm.module.css"


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        dispatch(register({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value}));
        console.log({ name: form.elements.name.value, email: form.elements.email.value, password: form.elements.password.value})
        form.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="username" className={css.label}> Username </label>
                <input className={css.formInput} id="username" type="text" name="name" required />
            
            <label htmlFor="email" className={css.label}>Email</label>  
                <input className={css.formInput} id="email" type="email" name="email" required />
            
            <label htmlFor="password" className={css.label}> Password   </label>
                <input className={css.formInput} id="password" type="password" name="password" required />
          
            <button className={css.button} type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;