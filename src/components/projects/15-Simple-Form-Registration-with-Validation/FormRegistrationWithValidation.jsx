import React, { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'

export default function FormRegistrationWithValidation() {
    let inputName = useRef(null);
    let inputEmail = useRef(null);
    let inputPassword = useRef(null);
    useEffect(() => {
        inputName.current.focus();
    }, []);

    const [values, setValues] = useState({
        user_name: '',
        email: '',
        password: ''
    });

    const handleNameChange = (e) => {
        setValues({ ...values, user_name: e.target.value })
    }

    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value })
    }

    const handlePasswordChange = (e) => {
        let value = e.target.value;
        setValues({ ...values, password: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.user_name) {
            inputName.current.focus();
        } else if (!values.email) {
            inputEmail.current.focus();
        } else if (!values.password) {
            inputPassword.current.focus();
        }
    }

    return (
        <div className='m-auto'>
            {/* Form Design */}
            <div className="container m-auto mt-4 p-2 shadow-sm border-5">
                <Title text={'Registration'} />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder='Enter your username'
                            ref={inputName}
                            value={values.user_name}
                            onChange={handleNameChange} />
                        <label className="text-danger fs-sm">Please enter your username</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder='Enter your email'
                            ref={inputEmail}
                            value={values.email}
                            onChange={handleEmailChange} />
                        <label className="text-danger fs-sm">Please enter your email</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder='Enter your password'
                            ref={inputPassword}
                            value={values.password}
                            onChange={handlePasswordChange} />
                        <label className="text-danger fs-sm">Please enter your password</label>
                    </div>
                    <Button
                        btnClass={'btn-primary btn-lg btn-block'}
                        text={'Register'} />
                </form>
            </div>

        </div>
    )
}
