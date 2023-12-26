import { Navigation } from '../Navigation/Navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../redux/auth/selectors'

export const Header = () => {
  const user = useSelector(selectUserName)
	return (
		<header>
			<h2>
				PhoneBook
			</h2>
			{user && <h2>{user}</h2>}
			<Navigation />
		</header>
	)
}
