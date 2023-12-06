import React, { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ProgressBar } from '../components/ProgressBar';

export default function ProjectProgressBarsTracker() {

    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState({
        ui: 55,
        ux: 87,
        data: 34
    });

    const projecData = [
        { bgColor: '#dc3545', completed: status.ui },
        { bgColor: '#28a745', completed: status.ux },
        { bgColor: '#7633f9', completed: status.data }
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
                        value={status.ui}
                        ref={uiInput}
                        onChange={(e) => setStatus({ ...status, ui: e.target.value })} />
                </li>
                <li>
                    UX status:  <input
                        type="number"
                        style={inputStyle}
                        value={status.ux}
                        onChange={(e) => setStatus({ ...status, ux: e.target.value })} />
                </li>
                <li>
                    DATA status:  <input
                        type="number"
                        style={inputStyle}
                        value={status.data}
                        onChange={(e) => setStatus({ ...status, data: e.target.value })} />
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
