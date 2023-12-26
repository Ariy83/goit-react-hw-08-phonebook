import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <div>
          <div>
				<h1>Sorry, page does not exist.</h1>
				<Link to='/contacts'>Go back to homepage!</Link>
			</div>
    </div>
  )
}

export default NotFound