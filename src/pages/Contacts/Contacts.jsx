import React from 'react'
import { useSelector } from 'react-redux'
import { Filter } from '../../components/Filter/Filter'
import { ContactList } from '../../components/ContactList/ContactList'
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../redux/phoneBook/selectors'

const Contacts = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter)
    const loading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    
    const getFilteredData = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()) 
    )
    }
    

  return (
      <div>
          <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={getFilteredData()} />

      {loading && <h1>Loading....</h1>}
			{error && <h1>{error}</h1>}
    </div>
  )
}

export default Contacts