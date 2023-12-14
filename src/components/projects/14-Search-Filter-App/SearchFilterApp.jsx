import React, { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'

import ContactsData from './Data.json'
import Contact from './Contact';

export default function SearchFilterApp() {

    let inputSearch = useRef(null);
    useEffect(() => {
        inputSearch.current.focus();
    })

    const [searchContact, setSearchContact] = useState('');


    return (
        <div className='container text-center'>
            <Title text={'Search Filter APP'} />
            <input
                type="text"
                placeholder='Search by first name...' c
                className='mb-2'
                style={{ padding: '0.3rem 0.5rem' }}
                ref={inputSearch}
                onChange={(e) => setSearchContact(e.target.value)} />
            <section
                className="d-flex"
                style={{ gap: 15, maxWidth: '1600px', margin: 'auto', flexWrap: 'wrap' }}>
                {ContactsData.filter((contact) => {
                    if (searchContact === '') {
                        return contact
                    } else if (contact.first_name.toLowerCase().includes(searchContact.toLowerCase())) {
                        return contact
                    }
                }).map((contact) => (
                    <Contact
                        contact={contact}
                        cardColor={'card-primary'}
                        textColor={'text-primary'} />
                ))}
            </section>
        </div>
    )
}
