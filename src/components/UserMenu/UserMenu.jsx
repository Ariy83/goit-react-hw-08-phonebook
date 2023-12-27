import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogIn, selectUserEmail } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import { StyledBtn, StyledWrap } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLogIn);
  const dispatch = useDispatch();

  return (
    <StyledWrap>
      {isLoggedIn && (
        <>
          <p>{email}</p>
          <StyledBtn onClick={() => dispatch(logoutThunk())}>Logout</StyledBtn>
        </>
      )}
    </StyledWrap>
  );
};

export default UserMenu;
