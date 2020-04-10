import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import { fetchProfile } from '../../api'

import Home from '../Home'
import NotFound from '../NotFound'

import Menu from './Menu'

const Layout = ({ history }) => {
  const [profile, setProfile] = useState({})

  const handleLogout = () => {
    localStorage.removeItem('token')

    history.push('/login')
  }

  // Load profile
  useEffect(() => {
    fetchProfile().then(({ data }) => {
      setProfile(data)
    })
  }, [])

  return (
    <>
      <Menu email={profile.email} logout={handleLogout} />

      <Container className="pt-3">
      {
        profile.id &&
          <Switch>
            <Route exact path="/" render={
              props => <Home {...props} profile={profile} onUpdate={setProfile} />} />
            <Route component={NotFound} />
          </Switch>
      }
      </Container>
    </>
  )
}

export default Layout
