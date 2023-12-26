import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "../../redux/phoneBook/selectors";
import { addContactThunk } from "../../redux/phoneBook/operations";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import { StyledTitle } from "../../components/ContactForm/ContactForm.styled";
import { toast } from "react-toastify";
import { Loader } from "../../components/Loader/Loader";
import { StyledFlexWrap } from "./PhoneBook.styled";

export const PhoneBook = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter)
    const loading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch()
  
    const handleAddContact = ({ name, number }) => {
        if (contacts.find(contact => contact.name === name)) {
            toast.warning(`${name} is already in contacts`)
            return
        }
        const newContact = { name, number, }
        dispatch(addContactThunk(newContact))
    }
  
  const getFilteredData = () => {
    return contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) 
    )
    }
    
  return (
    (
    <StyledFlexWrap>

      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm handleAddContact={handleAddContact}
       />

      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={getFilteredData()} />

      {loading && <Loader />}
			{error && <h1>{error}</h1>}
      
        </StyledFlexWrap>
  )
  )
}

export default PhoneBook