import React, { useRef, useEffect } from 'react'
import Title from '../components/Title'

import ContactsData from './Data.json'

export default function SearchFilterApp() {

    let inputSearch = useRef(null);
    useEffect(() => {
        inputSearch.current.focus();
    })
    return (
        <div className='container text-center'>
            <Title text={'Search Filter APP'} />
            <input
                type="text"
                placeholder='Search by first name...' c
                className='mb-2'
                style={{ padding: '0.3rem 0.5rem' }}
                ref={inputSearch} />
            <section
                className="d-flex"
                style={{ gap: 15, maxWidth: '1600px', margin: 'auto' }}>
                {ContactsData.map((contact) => (
                    <ul>
                        <li>{contact.last_name}</li>
                    </ul>
                ))}

            </section>
        </div>
    )
}
