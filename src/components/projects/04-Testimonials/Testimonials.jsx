import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

export default function Testimonials() {
    // const handleClick = () => {
    //     console.log('click');
    // }
    const [testimonials, setTestimonials] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [testimonials]);

    // console.log(items);

    return (
        <div className='container m-auto'>
            <Title text={'Testimonials'} />
            <Button
                text={'Posts'}
                btnClass='btn-info btn-lg'
                icon={<BsFillFileEarmarkPostFill className='mr-1' />}
                onClick={() => setTestimonials('Posts')} />
            <Button
                text={'Users'}
                btnClass='btn-info btn-lg'
                icon={<AiOutlineUser className='mr-1' />}
                onClick={() => setTestimonials('Users')} />
            <Button
                text={'Comments'}
                btnClass='btn-info btn-lg'
                icon={<AiOutlineComment className='mr-1' />}
                onClick={() => setTestimonials('Comments')} />
            <Title
                classes={'subtitle text-primary'}
                text={!testimonials ? 'Select from above!' : testimonials} />

            {!items ? null : items.map((i) => {
                return (
                    <div className="card card-primary mb-2" key={i.id}>
                        {i.name && <h2 className='card-header'>{i.name}</h2>}
                        <div className="card-body">
                            <h4>{i.title}</h4>
                            <p>{i.body}</p>
                            {i.email && <small className='card-footer' style={{
                                display: 'block', marginTop: '15px'
                            }}>{i.email}</small>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
