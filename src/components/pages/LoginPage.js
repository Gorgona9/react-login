import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../../App.css'

export default function SignInPage() {
    const navigate = useNavigate();
    const initialValues = {username: "", password: ""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);
        navigate('/home');
    };

    //input change handler
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormErrors(validate(formValues));
        setFormValues({...formValues, [name]: value});
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //form validation handler
    const validate = (values) => {
        let errors = {};

        if (!values.username) {
            errors.username = "Cannot be blank";
        } else if (values.username.length < 2) {
            errors.username = "Username must be at least 3 characters";
        }

        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text"
                           name="username"
                           id="username"
                           value={formValues.username}
                           onChange={handleChange}
                           className={`${formErrors.username ? 'error-input' : 'success-input'}`}
                           required/>
                    {formErrors.username &&
                    <span className={`message ${formErrors.username ? 'error' : 'success'}`}>{formErrors.username}</span>}
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password"
                           name="password"
                           id="password"
                           value={formValues.password}
                           className={`${formErrors.password ? 'error-input' : 'success-input'}`}
                           onChange={handleChange}
                           required/>
                    {formErrors.password && <span
                        className={`message ${formErrors.password ? 'error' : 'success'}`}>{formErrors.password}</span>}
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}
