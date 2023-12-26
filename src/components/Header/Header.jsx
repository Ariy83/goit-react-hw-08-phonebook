import { Navigation } from '../Navigation/Navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../redux/auth/selectors'
import { StyledHeader } from './Header.styled'
import UserMenu from '../UserMenu/UserMenu'

export const Header = () => {
  const user = useSelector(selectUserName)
	return (
		
		<StyledHeader>
			{/* <h2>
				PhoneBook
			</h2> */}
			{user && <h2>{user}</h2>}
			{user && <UserMenu />}
			<Navigation />
		</StyledHeader>
	)
}
