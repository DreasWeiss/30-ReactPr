import React from 'react'

export default function SliderComp() {
    return (
        <div className='d-flex flex-column' style={{ gap: 100 }}>
            <input type="range" min={0} max={100} value={0} />
            <div style={{
                color: 'black',
                height: '30px',
                width: '30px',
                background: 'lightgray',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%'
            }}>
                <span>circle</span>
            </div>
        </div>
    )
}
