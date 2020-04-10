import React, { useState, useMemo } from 'react'
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

import { sendMoney } from '../../api'

const Home = ({ profile, onUpdate }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(0)
  const balance = useMemo(() => parseFloat(profile.balance), [profile.balance])

  const validate = () => {
    if (!email) {
      return 'Email is required'
    } else if (!amount) {
      return 'Amount is required'
    } else if (amount < 0) {
      return 'Amount should be positive'
    }

    return ''
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangeAmount = e => {
    setAmount(parseFloat(e.target.value))
  }

  const handleSubmit = () => {
    setError('')

    const error = validate()

    if (error) {
      setError(error)

      return
    }

    sendMoney(email, amount)
      .then(({ data }) => {
        onUpdate(data)
      })
      .catch(e => {
        setError(e.response.data.error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="mx-auto" style={{ width: 400 }}>
      {error && <Alert color="danger">{error}</Alert>}

      <h1 className="text-center mb-4">Balance: {`$${balance.toFixed(2)}`}</h1>
      
      <Card>
        <CardBody>
          <h2 className="text-center">Send money</h2>

          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" type="email" name="email" value={email} onChange={handleChangeEmail} />
            </FormGroup>

            <FormGroup>
              <Label for="amount">Amount</Label>
              <Input id="amount" type="number" name="amount" value={amount} onChange={handleChangeAmount} />
            </FormGroup>

            <Button color="primary" disabled={loading} onClick={handleSubmit}>
              {loading && <Spinner size="sm" className="mr-2" />}
              Send
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
