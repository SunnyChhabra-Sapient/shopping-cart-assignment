import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

// import { UserContext } from "../../context/user.context";

import './sign-up-form.styles.scss';

const defaultFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { firstName, lastName, email, password, confirmPassword } = formFields;
    // const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();

    // console.log(formFields);
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <>
            <section className="signin-container" aria-label="Sign Up Page">
                <section className="sign-in-content">
                    <h2>Signup</h2>
                    <span>We do not share your personal detail with anyone.</span>
                </section>
                <section className="sign-up-container" aria-label="Sign Up Form">

                    <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={(fields, { resetForm }) => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                        resetForm({fields:''});
                    navigate('/');
                }}
 
                // onChange={(fields) => {
                //     console.log(fields.firstName)
                // }}
                render={({ errors, status, touched }) => (
                    <Form>
                        
                        <div className="group">
                            <Field name="firstName" type="text" onKeyUp={handleChange} className={'form-input' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <label aria-label="First Name" htmlFor="firstName" className={`${firstName.length > 0 ? 'shrink':''} form-input-label`}>First Name</label>
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="group">
                            <Field name="lastName" onKeyUp={handleChange} type="text" className={'form-input' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <label aria-label="Last Name" htmlFor="lastName" className={`${lastName.length ? 'shrink':''} form-input-label`}>Last Name</label>
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
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
                        <div className="group">
                            <Field name="confirmPassword" type="password" onKeyUp={handleChange}  className={'form-input' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <label aria-label="Confirm Password" htmlFor="confirmPassword" className={`${confirmPassword.length ? 'shrink':''} form-input-label`}>Confirm Password</label>
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                            <Button  buttonType="primary" aria-label="Signup Button" type="submit">Sign Up</Button>

                    </Form>
                )}
            />
                </section>
            </section>


        </>
    )
}

export default SignUpForm;