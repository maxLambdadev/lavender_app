"use client"

import React, { useState } from "react"

export function LoginForm(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [focused, setFocused] = useState({});
    const [objectChangeFlag, setObjectChangeFlag] = useState(false);

    const validateForm = (field = null, value = null) => {
        let isValid = true;
        let temp_errors = errors;

        if (field == 'username') {
            if (!value.trim()) {
                temp_errors.username = 'This field is required.';
                isValid = false;
            } else temp_errors.username = "";
        } else if (field == 'password') {
            if (!value.trim()) {
                temp_errors.password = 'This field is required.';
                isValid = false;
            } else temp_errors.password = "";
        } else if (!field) {
            if (!formData.username.trim()) {
                temp_errors.username = 'This field is required.';
                isValid = false;
            }

            if (!field && !formData.password.trim()) {
                temp_errors.password = 'This field is required.';
                isValid = false;
            }
        }        

        setErrors(temp_errors);
        setObjectChangeFlag(!objectChangeFlag);

        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        validateForm(name, value);     
    };

    const handleFocus = (e) => {
        const { name, value } = e.target;
        setFocused(prevState => ({
            ...prevState,
            [name]: true,
        }));   
        setObjectChangeFlag(!objectChangeFlag);
    };
    const handleBlur = (e) => {
        const { name, value } = e.target;
        setFocused(prevState => ({
            ...prevState,
            [name]: false,
        })); 
        setObjectChangeFlag(!objectChangeFlag);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    }

    return (
        <div className="login-wra">
            <form id="form-login" className="p-t-15" role="form" action="index.html">
                <div className={`form-group form-group-default ${!!errors?.username ? 'has-error' : ''} ${!!focused?.username ? 'focused' : ''}`} >
                    <label className={`${!!formData?.username ?'fade' : ''}`}>ID</label>
                    <div className="controls">
                        <input type="text" name="username" className={`form-control ${!!focused?.username ? 'focus-visible' : ''}`}  placeholder="account identification number" required
                            value={formData.username} onChange={handleChange}
                            onFocus={handleFocus} onBlur={handleBlur}
                        />
                    </div>
                </div>
                {errors.username && <label className="error">{errors.username}</label>}

                <div className={`form-group form-group-default ${!!errors?.password ? 'has-error' : ''} ${!!focused?.password ? 'focused' : ''}`}>
                    <label className={`${!!formData?.password ?'fade' : ''}`}>Password</label>
                    <div className="controls">
                        <input type="password" name="password" className={`form-control ${!!focused?.password ? 'focus-visible' : ''}`} placeholder="secure password" required
                            value={formData.password} onChange={handleChange}
                            onFocus={handleFocus} onBlur={handleBlur}
                        />
                    </div>
                </div>
                {errors.password && <label className="error">{errors.password}</label>}

                <div className="row">
                    <div className="col-md-6 no-padding sm-p-l-10">
                        <div className="form-check hide">
                            <input type="checkbox" value="1" id="checkbox1" />
                            <label htmlFor="checkbox1">Remember me</label>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <button aria-label="" className="btn btn-primary btn-lg m-t-10" type="submit" onClick={handleSubmit}>Sign in</button>
                    </div>
                </div>
                <hr className="m-b-10" />
                <div className="m-b-5 m-t-10">
                    Or,&nbsp;
                    <img src="https://developers.google.com/static/identity/gsi/web/images/standard-button-white.png" className="inline-block" />
                </div>
                <div className="m-b-5 m-t-30 hide">
                    <a href="#" className="normal">Lost your password?</a>
                </div>
                <div>
                    <a href="#" className="normal hide">Not a member yet? Signup now.</a>
                </div>
            </form>
        </div>
    )
}