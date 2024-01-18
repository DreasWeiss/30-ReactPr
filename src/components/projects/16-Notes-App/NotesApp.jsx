import React, { useState } from 'react'
import NewNote from './NewNote'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid'

export default function NotesApp() {

    const [notes, setNotes] = useState([]);

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote];
        newNotes.filter((note) => !note.id && (note.id = uuidv4()));
        // console.log(uuidv4());
        // console.log(newNotes);
        setNotes(newNotes);
    }
    return (
        <div className='container'>
            <Button
                btnClass={'btn-info'}
                text={'+ new note'}
                onClick={addNewNote} />
            <div
                className="container container-sm d-flex"
                style={{ gap: 25, flexWrap: 'wrap' }}>
                {notes.map((note) => (
                    <NewNote key={note.id} note={note} />
                ))}
                {/* {notes.map((n) => console.log(n.id))} */}
            </div>
        </div>
    )
}
