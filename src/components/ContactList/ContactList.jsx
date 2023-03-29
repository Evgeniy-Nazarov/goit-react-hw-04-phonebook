
import React from 'react';
import { ContactItem, ContactItems } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => { 
    


    return (
        <>   
        <ContactItems>
            {contacts.map(({id, name, number}) => (
                <ContactItem key={id}>
                    {name}: {number} <button onClick={()=>onDelete(id)} type='button'>Delete</button>
                </ContactItem>
            ))}
            </ContactItems>
            </>
    )
}
