import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registrationThunk } from '../../redux/auth/operations'

const Registration = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const submit = data => {
    dispatch(registrationThunk(data))
    reset()
  }

  return (
    <div>
			<form onSubmit={handleSubmit(submit)}>
				<label>
					<span>Name</span>
					<input
						{...register('name')}
						placeholder='Enter your name'
						type='text'
					/>
				</label>
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
				<button>Register</button>
			</form>
		</div>
  )
}

export default Registration