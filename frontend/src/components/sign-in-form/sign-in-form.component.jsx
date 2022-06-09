import { useState } from "react";

import Button from "../button/button.component";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate()

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
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({

                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .required('Password is required'),
                })}
                onSubmit={(fields, { resetForm }) => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                        resetForm({fields:''});
                    navigate('/');
                }}
 
                render={({ errors, status, touched }) => (
                    <Form>
                    
                        <div className="group">
                        <Field name="email" onKeyUp={handleChange} type="text" className={'form-input' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <label aria-label="Email" htmlFor="email" className={`${email.length ? 'shrink':''} form-input-label`}>Email</label>
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="group">
                            <Field name="password"  type="password"  onKeyUp={handleChange} className={'form-input' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <label aria-label="Passord" htmlFor="password" className={`${password.length ? 'shrink':''} form-input-label`}>Password</label>
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                       
                            <Button  buttonType="primary" aria-label="Signup Button" type="submit">Sign In</Button>

                    </Form>
                )}
            />
            </section>
        </section>
        </>
    )
}

export default SignInForm;