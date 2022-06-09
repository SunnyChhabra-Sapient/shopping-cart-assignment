import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// import { UserContext } from "../../context/user.context";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // const {setCurrentUser} = useContext(UserContext);

    // console.log(formFields);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }





    return (
        <>
        <section className="signin-container">
            <section className="sign-in-content">
                <h2>Login</h2>
                <span>Get access to your Orders, Wishlist and Recommendations</span>
            </section>
            <section className="sign-up-container" aria-label="Sign In Form">
                <form >
                    <FormInput aria-label="Email" label="Email" type="email" name="email" required onChange={handleChange} value={email} />
                    <FormInput aria-label="Password" label="Password" type="password" name="password" required onChange={handleChange} value={password} />
                    {/* <label>Display Name</label>
                <input type="text" name="displayName" required onChange={handleChange} value={displayName}/>
                <label>Email</label>
                <input type="email" name="email" required onChange={handleChange} value={email}/>
                <label>Password</label>
                <input type="password" name="password" required onChange={handleChange} value={password}/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword}/> */}
                    <div className="buttons-container">
                        <Button buttonType="primary" aria-label="Sign In Button" type="submit">Login</Button>
                        {/* <Button aria-label="Google SignIn Button" type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button> */}
                    </div>
                </form>
            </section>
        </section>
        </>
    )
}

export default SignInForm;