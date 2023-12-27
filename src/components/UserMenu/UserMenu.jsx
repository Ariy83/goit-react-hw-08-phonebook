import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import { StyledBtn, StyledWrap } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);

  const dispatch = useDispatch();

  return (
    <StyledWrap>
      <p>{email}</p>
      <StyledBtn onClick={() => dispatch(logoutThunk())}>Logout</StyledBtn>
    </StyledWrap>
  );
};

export default UserMenu;
