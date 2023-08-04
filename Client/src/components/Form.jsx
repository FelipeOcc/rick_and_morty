import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

const Form = ({ login }) => {
    const [errors, setErrors] = useState ({});
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    return(
        <form onSubmit = { handleSubmit }>
            <div className = { styles.form }>
                <h2>¡Hola otra vez!</h2>
                <div className = { styles.formInputBox }>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' value={userData.email} onChange={handleChange}/>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>
                <div className= { styles.formInputBox }>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' value={userData.password} onChange={handleChange} />
                    {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                </div>
                <button>Submit</button>
            </div>
        </form>
        
        )
}


export default Form;