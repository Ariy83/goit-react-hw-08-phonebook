import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContactThunk } from '../../redux/phoneBook/operations'
import { StyledBtn } from '../UserMenu/UserMenu.styled'
import { StyledItem } from '../ContactList/ContactList.styled'


export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch()
  return (
      <StyledItem>
          
          <span>{name}: {number}</span>
              <StyledBtn onClick={() => dispatch(deleteContactThunk(id))}>Delete</StyledBtn>
          
      </StyledItem>
  )
}
