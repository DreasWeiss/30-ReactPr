import React, { useRef, useEffect } from 'react'
import Title from '../components/Title'
import { ProgressBar } from '../components/ProgressBar';

export default function ProjectProgressBarsTracker() {

    const inputStyle = {
        width: 50,
        border: 'none',
        outline: 'none',
        textAlign: 'center',
        borderBottom: '1px solid lightgray'
    }

    const uiInput = useRef(null);

    useEffect(() => {
        uiInput.current.focus();
    })

    return (
        <div className='container container-sm mx-auto text-center'>
            <Title text={'Project Progress Bars Tracker'} />
            <h2>Project status:</h2>
            <ul>
                <li>
                    UI status:  <input
                        type="number"
                        style={inputStyle}
                        value={''}
                        ref={uiInput}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
                <li>
                    UX status:  <input
                        type="number"
                        style={inputStyle}
                        value={''}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
                <li>
                    DATA status:  <input
                        type="number"
                        style={inputStyle}
                        value={''}
                        onChange={(e) => console.log(e.target.value)} />
                </li>
            </ul>
            {/* Progress Bars */}
            <ProgressBar />
        </div>
    )
}
