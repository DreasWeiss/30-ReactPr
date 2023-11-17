import React from 'react'
import Button from '../components/Button'

export default function LightDarkMode() {
    return (
        <div className='container'>
            <h1>hello world</h1>
            <Button text={'Dark'} onClick={() => console.log('click')} />
        </div>
    )
}
