import React, { useState } from 'react';
import Title from '../components/Title';
import { GiGluttonousSmile, GiBugleCall } from 'react-icons/gi';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import DoggyDog from './img/dog.avif';

export default function LikeMyPhoto() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);


    const toogleLike = () => !like ? setLike(true) & setCount(count + 1) : setLike(false) & setCount(count - 1);

    return (
        <div className='container text-center'>
            <Title text={'Like Photo App'} />
            <Title classes={'subtitle'} text={`Likes ${count}`} />
            <div className="card card-dark m-auto shadow-sm"
                style={{ width: 300, cursor: 'pointer' }}>
                <div className="card-header fs-xl">
                    <GiGluttonousSmile className='mr-2' />
                    <small>DoggyDog</small>
                </div>
                <img src={DoggyDog}
                    alt="doggy img"
                    style={{ height: 'fit-content' }}
                    onDoubleClick={toogleLike} />
                <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between' }}>
                    <GiBugleCall />
                    {like ? (<AiTwotoneHeart className='text-danger' onClick={toogleLike} />) : <AiOutlineHeart onClick={toogleLike} />}
                </div>
            </div>
        </div >
    )
}
