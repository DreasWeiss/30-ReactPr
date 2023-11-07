import React, { useState } from 'react'
import Title from '../components/Title'

export default function ESignatureApp() {
    const [name, setName] = useState('Ur Signature');
    const [date, setDate] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted',
        outline: 'none',
        padding: '.35rem 0'
    }
    document.body.style.background = 'rgba(201, 189, 189, 0.7)';
    return (
        <div className="ESignatureApp">
            <div className="container">
                <div className="up">
                    <Title text={name} />
                    <Title classes={'subtitle'} text={!date ? 'DoB' : date} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sit neque ea deleniti iusto beatae. Temporibus dolore ipsa rerum adipisci quo doloremque quod nostrum deserunt non iusto atque, consequatur eaque corporis corrupti veniam distinctio quibusdam facere sequi ullam sit est itaque omnis? Quasi provident eius nemo, natus omnis corporis dolorem veritatis modi laboriosam corrupti, sequi, nisi in id laborum officia quibusdam debitis nostrum vitae placeat enim voluptatibus repellendus iste? Molestiae maiores aspernatur rem provident facere dignissimos pariatur amet repudiandae commodi!</p>
                </div>
                <div className="down">
                    <input
                        type="date"
                        value={date}
                        style={inputStyle}
                        onChange={handleDateChange} />
                    <input
                        type="text"
                        value={name}
                        style={inputStyle}
                        onChange={handleNameChange} />
                </div>
            </div>

        </div>
    )
}
