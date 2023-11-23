import React, { useState, useEffect } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import LockScreenImg from './img/road.jpg';
import HomeScreenImg from './img/beach.jpg';

export default function SlideToUnlock() {
    const [uiProps, setUiProps] = useState({
        uiText: 'Unlock screen',
        uiColor: '#eee',
        uiBg: `url(${LockScreenImg}) center/cover no-repeat`
    });
    const [showLockSlider, setShowLockSlider] = useState(true);
    const [lockSliderValue, setLockSliderValue] = useState(0);

    const handleLockSliderInput = (e) => {
        setLockSliderValue(e.target.value);
        // console.log(lockSliderValue);
    }

    useEffect(() => {
        if (lockSliderValue == 100) {
            setShowLockSlider(false);
            setUiProps({
                uiText: 'Unlocked screen',
                uiColor: '#eee',
                uiBg: `url(${HomeScreenImg}) center/cover no-repeat`
            })
        }
    }, [lockSliderValue]);


    return (
        <div className='container text-center d-flex flex-column border-20 shadow-md' style={{
            height: '70vh',
            marginTop: '15vh',
            width: 340,
            border: '4px solid #000',
            background: uiProps.uiBg
        }}>
            <h1 className="title" style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
            {showLockSlider ? (
                <LockSlider
                    width={'250px'}
                    handleInput={handleLockSliderInput}
                    sliderValue={lockSliderValue} />
            ) :
                <AiFillUnlock className='unlockIcon' />
            }


        </div>
    )
}
