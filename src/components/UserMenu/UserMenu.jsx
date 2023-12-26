import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLogIn, selectUserEmail } from '../../redux/auth/selectors'
import { logoutThunk } from '../../redux/auth/operations'

const UserMenu = () => {
  const email = useSelector(selectUserEmail)
  const isLoggedIn = useSelector(selectIsLogIn)
	const dispatch = useDispatch()

  return (
    <div>
      {isLoggedIn && (
        <>
          <p>{email}</p>
					<button onClick={() => dispatch(logoutThunk())}>Logout</button>
				</>
      )}
    </div>
  )
}

export default UserMenu