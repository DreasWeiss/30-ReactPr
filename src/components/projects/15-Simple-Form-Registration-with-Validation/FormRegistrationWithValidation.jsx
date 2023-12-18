import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Alert from '../components/Alert'

export default function FormRegistrationWithValidation() {
    return (
        <div className='m-auto'>
            {/* Form Design */}
            <div className="container m-auto mt-4 p-2 shadow-sm border-5">
                <Title text={'Registration'} />
                <form>
                    <div className="form-group">
                        <input type="text" placeholder='Enter your username' />
                        <label className="text-danger fs-sm">Please enter your username</label>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder='Enter your email' />
                        <label className="text-danger fs-sm">Please enter your email</label>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder='Enter your password' />
                        <label className="text-danger fs-sm">Please enter your password</label>
                    </div>
                    <Button
                        btnClass={'btn-primary btn-lg btn-block'}
                        text={'Register'} />
                    <Button
                        btnClass={'btn-primary btn-lg btn-block'}
                        text={'Register'} />
                </form>
            </div>

        </div>
    )
}
