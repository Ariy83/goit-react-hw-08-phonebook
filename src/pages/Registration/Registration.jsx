import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registrationThunk } from '../../redux/auth/operations';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../../components/ContactForm/ContactForm.styled';
import { StyledFlexWrap } from '../PhoneBook/PhoneBook.styled';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(registrationThunk(data))
      .unwrap()
      .then(res => {
        Navigate('/contacts');
        toast.success(`Welcome ${res.user.name}!`);
      });
    reset();
  };

  return (
    <StyledFlexWrap>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledLabel>
          <span>Name</span>
          <StyledInput
            {...register('name')}
            placeholder="Enter your name"
            type="text"
          />
        </StyledLabel>
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
        <StyledButton>Register</StyledButton>
      </StyledForm>
    </StyledFlexWrap>
  );
};

export default Registration;
