import React, { useState } from 'react'
import Blog from './Blog'


export default function LightDarkMode() {

    const [theme, setTheme] = useState('light');

    return (
        <div className='container p-1'>
            <Blog theme={theme} />
        </div>
    )
}
