import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginThunk } from '../../redux/auth/operations'

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
    <div>
			<form onSubmit={handleSubmit(submit)}>
				<label>
					<span>Email</span>
					<input
						{...register('email')}
						placeholder='Enter your email'
						type='email'
					/>
				</label>
				<label>
					<span>Password</span>
					<input
						{...register('password')}
						placeholder='Enter your password'
						type='password'
					/>
				</label>
				<button>Login</button>
			</form>
		</div>
  )
}

export default Login