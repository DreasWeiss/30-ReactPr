import React from 'react'
import Button from '../components/Button'

export default function TextAnimation() {
    return (
        <div className='container text-center'>
            <form
                action=""
                className="container d-flex mt-4"
                onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="">Type in your text to be animated</label>
                    <input type="text" placeholder='Your text' />
                </div>
                <Button text={'Clear'} btnClass={'btn-large btn-danger'} />
            </form>
        </div>
    )
}
import React from 'react'
import Button from '../components/Button'

export default function TextAnimation() {
    return (
        <div className='container text-center'>
            <form
                action=""
                className="container d-flex mt-4"
                onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="">Type in your text to be animated</label>
                    <input type="text" placeholder='Your text' />
                </div>
                <Button text={'Clear'} btnClass={'btn-large btn-danger'} />
            </form>
        </div>
    )
}
