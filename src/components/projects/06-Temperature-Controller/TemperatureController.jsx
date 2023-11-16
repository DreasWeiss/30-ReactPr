import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

export default function TemperatureController() {
    return (
        <div className='container mt-3 text-center'>
            <Title text={'Temperature Controller'} />
            <div
                className="card bg-light m-auto"
                style={{ width: 200 }}>
                <h1
                    className='text-light card border-50'
                    style={
                        {
                            height: 150,
                            width: 150,
                            border: '2px solid #666'
                        }}>
                    Temperature
                </h1>
                <div className="d-flet my-2">
                    <Button
                        text={'-'}
                        btnClass={'btn-lg'}
                        onClick={() => console.log('-')} />
                    <Button
                        text={'+'}
                        btnClass={'btn-lg'}
                        onClick={() => console.log('+')} />
                </div>
            </div>
        </div>
    )
}
