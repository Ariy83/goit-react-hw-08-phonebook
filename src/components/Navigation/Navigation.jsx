import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLogIn } from '../../redux/auth/selectors'
import UserMenu from '../UserMenu/UserMenu'

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLogIn)

	return (
		<div>
			<NavLink to='/'>PhoneBook</NavLink>
			{!isLogIn && (
				<>
					<NavLink to='/login'>Login</NavLink>
					<NavLink to='/register'>Registration</NavLink>
				</>
			)}
			<UserMenu />
		</div>
	)
}
