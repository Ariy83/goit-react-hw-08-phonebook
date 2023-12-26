import React from 'react'
import { ContactItem } from '../ContactItem/ContactItem'
import { StyledButton } from '../ContactForm/ContactForm.styled'

export const ContactList = ({contacts=[]}) => {
  return (
      <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id}
              {...contact}
              name={contact.name}
              number={contact.number}
            >
              <StyledButton >Add contact</StyledButton>
            </ContactItem>
			))}
      </ul>
  )
}
