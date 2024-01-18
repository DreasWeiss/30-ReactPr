import React from 'react'
import NewNote from './NewNote'
import Button from '../components/Button'

export default function NotesApp() {
    return (
        <div className='container'>
            <Button btnClass={'btn-info'} text={'+ new note'} />
            <div
                className="container container-sm d-flex"
                style={{ gap: 25, flexWrap: 'wrap' }}>
                <NewNote />
            </div>
        </div>
    )
}
