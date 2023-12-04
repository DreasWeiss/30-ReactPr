import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Popup from '../components/Popup'

export default function MagicPopup() {
    return (
        <div className='container text-center'>
            <Title text={'Magic Popup APP'} />
            <Button text={'Click me'} />
            <Popup type={'alert-info'} />
        </div>
    )
}
