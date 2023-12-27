import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../../components/ContactForm/ContactForm.styled';
import { StyledFlexWrap } from '../PhoneBook/PhoneBook.styled';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}!`);
      });
    reset();
  };

  return (
    <StyledFlexWrap>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledLabel>
          <span>Email</span>
          <StyledInput
            {...register('email')}
            placeholder="Enter your email"
            type="email"
          />
        </StyledLabel>
        <StyledLabel>
          <span>Password</span>
          <StyledInput
            {...register('password')}
            placeholder="Enter your password"
            type="password"
          />
        </StyledLabel>
        <StyledButton>Login</StyledButton>
      </StyledForm>
    </StyledFlexWrap>
  );
};

export default Login;
