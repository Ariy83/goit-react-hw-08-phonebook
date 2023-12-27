import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogIn, selectUserName } from '../../redux/auth/selectors';
import { StyledHeader, StyledNavLink, StyledWrap } from './Navigation.styled';
import UserMenu from '../UserMenu/UserMenu';
import { StyledTitle } from '../ContactForm/ContactForm.styled';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLogIn);
  const user = useSelector(selectUserName);

  return (
    <StyledHeader>
      <StyledWrap>
        {user && <StyledTitle>{user}</StyledTitle>}
        {user && <UserMenu />}
        <StyledNavLink to="/contacts">PhoneBook</StyledNavLink>
        {!isLogIn && (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Registration</StyledNavLink>
          </>
        )}
      </StyledWrap>
    </StyledHeader>
  );
};
