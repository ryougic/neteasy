import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function AuthRoute(props) {
  let { component: Com, path } = props
  return (
    <Route render={() => {
      if (localStorage.getItem('token')) { return <Com {...props} /> }
      else {
        return <Redirect to='/self' />
      }
    }
    } />
  )
}
