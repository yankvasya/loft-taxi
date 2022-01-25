import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/" />
}

export default connect(
  state => ({ isLoggedIn: state.auth.isLoggedIn })
)(PrivateRoute)
