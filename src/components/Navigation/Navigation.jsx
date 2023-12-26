import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLogIn } from '../../redux/auth/selectors'
import { StyledNavLink, StyledWrap } from './Navigation.styled'

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLogIn)

	return (
		<StyledWrap>
						<StyledNavLink to='/'>PhoneBook</StyledNavLink>
			{!isLogIn && (
				<>
					<StyledNavLink to='/login'>Login</StyledNavLink>
					<StyledNavLink to='/register'>Registration</StyledNavLink>
				</>
			)}
		</StyledWrap>
	)
}
