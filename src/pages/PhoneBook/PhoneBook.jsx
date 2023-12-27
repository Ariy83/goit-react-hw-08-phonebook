import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from '../../redux/phoneBook/selectors';
import {
  addContactThunk,
  fetchContactsThunk,
} from '../../redux/phoneBook/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import { StyledFlexWrap } from './PhoneBook.styled';

export const PhoneBook = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      toast.warning(`${name} is already in contacts`);
      return;
    }
    const newContact = { name, number };
    dispatch(addContactThunk(newContact));
  };

  const getFilteredData = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <StyledFlexWrap>
      <ContactForm handleAddContact={handleAddContact} />

      <Filter />
      <ContactList contacts={getFilteredData()} />
      {loading && <Loader />}

      {error && <h1>{error}</h1>}
    </StyledFlexWrap>
  );
};

export default PhoneBook;
