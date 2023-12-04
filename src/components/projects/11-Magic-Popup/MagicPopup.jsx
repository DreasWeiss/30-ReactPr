import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Popup from '../components/Popup'

export default function MagicPopup() {

    const [trigger, setTrigger] = useState(false);

    const triggerPopup = () => {
        setTrigger(true);
    }

    return (
        <div className='container text-center'>
            <Title text={'Magic Popup APP'} />
            <Title
                text={'click for popup or wait for 3 seconds'}
                classes={'subtitle'} />
            <Button
                text={'Click me'}
                btnClass={'btn-primary'}
                onClick={triggerPopup} />
            {trigger &&
                <Popup
                    type={'alert-info'}
                    title={'Triggered PopUP :)'}
                    text={'This popup was triggered by button'}
                    handleClose={setTrigger} />
            }
        </div>
    )
}
