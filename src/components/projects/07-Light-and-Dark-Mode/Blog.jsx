import React, { useContext } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import { ThemeContext } from './contex/theme-contex';

export default function Blog() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <div className='container p-1'>
            <Title text={`My Blog with ${theme} Theme`} />
            <span style={{ position: 'absolute', top: 10, right: 10 }}>
                <Button
                    text={theme === 'dark' ? 'Light' : 'Dark'}
                    btnClass={`${theme === 'dark' && 'btn-light'} btn-sm`}
                    onClick={changeTheme} />
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, earum. Asperiores sed accusantium fugiat voluptatem, dicta quasi fugit veniam ad repudiandae blanditiis pariatur quas reprehenderit. Minima eum doloribus facilis quibusdam.</p>
        </div>
    )
}
