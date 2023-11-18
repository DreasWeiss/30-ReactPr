import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'

export default function Blog({ theme }) {
    return (
        <div className='container'>
            <Title text={`My Blog with ${theme} Theme`} />
            <span style={{ position: 'absolute', top: 10, right: 10 }}>
                <Button text={theme} onClick={() => console.log('click')} />
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, earum. Asperiores sed accusantium fugiat voluptatem, dicta quasi fugit veniam ad repudiandae blanditiis pariatur quas reprehenderit. Minima eum doloribus facilis quibusdam.</p>
        </div>
    )
}
