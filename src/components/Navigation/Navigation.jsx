import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogIn, selectUserName } from '../../redux/auth/selectors';
import {
  StyledHeader,
  StyledName,
  StyledNavLink,
  StyledWrap,
} from './Navigation.styled';
import UserMenu from '../UserMenu/UserMenu';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLogIn);
  const user = useSelector(selectUserName);

  return (
    <StyledHeader>
      <StyledWrap>
        <StyledNavLink to="/">Homepage</StyledNavLink>
        {isLogIn ? (
          <>
            <StyledName>{user}</StyledName>
            <UserMenu />
            <StyledNavLink to="/contacts">PhoneBook</StyledNavLink>
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Registration</StyledNavLink>
          </>
        )}
      </StyledWrap>
    </StyledHeader>
  );
};
