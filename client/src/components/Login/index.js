import React, { useState } from 'react'
import {
  Alert,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner
} from 'reactstrap';

import { login } from '../../api'

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validate = () => {
    if (!email) {
      return 'Email is required'
    } else if (!password) {
      return 'Password is required'
    }

    return ''
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    setError('')

    const error = validate()

    if (error) {
      setError(error)

      return
    }

    setLoading(true)

    login(email, password)
      .then(({ data }) => {
        localStorage.setItem('token', data.jwt)

        // Redirect to home
        history.push('/')
      })
      .catch(() => {
        setError('Email and password does not match')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div style={{ width: 400, margin: '200px auto' }}>
      {error && <Alert color="danger">{error}</Alert>}

      <Card>
        <CardBody>
          <h2 className="text-center">Login</h2>

          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" type="email" name="email" value={email} onChange={handleChangeEmail} />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="password" name="password" value={password} onChange={handleChangePassword} />
            </FormGroup>

            <Button color="primary" disabled={loading} onClick={handleSubmit}>
              {loading && <Spinner size="sm" className="mr-2" />}
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login
