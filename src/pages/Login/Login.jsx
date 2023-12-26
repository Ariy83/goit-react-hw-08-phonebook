import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginThunk } from '../../redux/auth/operations'
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledTitle } from '../../components/ContactForm/ContactForm.styled'
import { StyledFlexWrap } from '../PhoneBook/PhoneBook.styled'

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm(
    // {
	// 	defaultValues: {
	// 		email: 'Andrii@mail.com.ua',
	// 		password: 'Andrii@mail.com.ua',
	// 	}
    // }
  )
  const dispatch = useDispatch()
  
  const submit = data => {
    dispatch(loginThunk(data)).unwrap()
			.then(res => {
				navigate('/')
				toast.success(`Welcome ${res.user.name}!`)
			})
			.catch(() => {
				toast.error('Something went wrong!!!')
			})
    reset()
  }

  return (
	  <StyledFlexWrap>
		  <StyledTitle>Login</StyledTitle>
			<StyledForm onSubmit={handleSubmit(submit)}>
				<StyledLabel>
					<span>Email</span>
					<StyledInput
						{...register('email')}
						placeholder='Enter your email'
						type='email'
					/>
				</StyledLabel>
				<StyledLabel>
					<span>Password</span>
					<StyledInput
						{...register('password')}
						placeholder='Enter your password'
						type='password'
					/>
				</StyledLabel>
				<StyledButton>Login</StyledButton>
			</StyledForm>
		</StyledFlexWrap>
  )
}

export default Login