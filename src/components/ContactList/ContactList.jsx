import React from 'react'
import { ContactItem } from '../ContactItem/ContactItem'
import { StyledList } from './ContactList.styled'


export const ContactList = ({contacts=[]}) => {
  return (
      <StyledList>
          {contacts.map(contact => (
            <ContactItem key={contact.id}
              {...contact}
              name={contact.name}
              number={contact.number}
            >
            </ContactItem>
			))}
      </StyledList>
  )
}
