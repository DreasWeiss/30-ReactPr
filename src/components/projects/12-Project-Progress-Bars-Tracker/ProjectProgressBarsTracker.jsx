import React, { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ProgressBar } from '../components/ProgressBar';

export default function ProjectProgressBarsTracker() {

    const [comleted, setCompleted] = useState(0);

    const projecData = [
        { bgColor: '#dc3545', completed: 57 },
        { bgColor: '#28a745', completed: 88 },
        { bgColor: '#7633f9', completed: 20 }
    ]

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
            {projecData.map((data, idx) => (
                <ProgressBar
                    bgColor={data.bgColor}
                    completed={data.completed}
                    key={idx + 1} />
            ))}
        </div>
    )
}
