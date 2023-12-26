import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContactThunk } from '../../redux/phoneBook/operations'
import { Flex, StyledButton } from '../ContactForm/ContactForm.styled'


export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch()
  return (
      <li>
          <Flex>
          <h3>{name}: {number}</h3>
              <StyledButton onClick={() => dispatch(deleteContactThunk(id))}>Delete</StyledButton>
          </Flex>
      </li>
  )
}
