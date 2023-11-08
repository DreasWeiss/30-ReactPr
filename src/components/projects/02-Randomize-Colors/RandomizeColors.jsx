import React from 'react';
import Title from '../components/Title';
import './RandomizeColors.scss';

export default function RandomizeColors() {
    return (
        <div className='RandomizeColors container'>
            <Title text={'Randomize Colors'} classes={'mb-4'} />
            <button className='btn btn-danger'>Click me</button>
        </div>
    )
}
