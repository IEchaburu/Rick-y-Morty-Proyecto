import { useState } from "react";
import validation from "../Valiidation/Validation";

const Form = ( { login } ) => {
    const [erros, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            {erros.email && <p>{erros.email}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {erros.password && <p>{erros.password}</p>}

            <button>Submit</button>
        </form>
    )
}

export default Form;