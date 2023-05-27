import { Color } from '@/utils/colors'
import { useContactForm } from '@/utils/hooks'

import styled from 'styled-components'

const FormContainer = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 2rem;
  background-color: #f5f5f5; // Off-white background
  display: flex;
  flex-direction: column;
  width: 400px;
`

const Label = styled.label`
  margin-bottom: 1rem;
  display: flex;
`

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
`

const TextArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  display: flex;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;

  &:hover {
    background-color: #0056b3;
  }
`
function ContactForm() {
  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT
  const { status, handleFormSubmit } = useContactForm(FORM_ENDPOINT!)

  if (status) {
    return (
      <div>
        <div>
          <div>Thank you!</div>
          <div>{status}</div>
        </div>
      </div>
    )
  }
  return (
    <FormContainer>
      <form method='POST' action={FORM_ENDPOINT} onSubmit={handleFormSubmit}>
        <Label>
          <span>Your name</span>
          <Input type='text' name='name' placeholder='Joe Bloggs' />
        </Label>
        <Label>
          <span>Email address</span>
          <Input name='email' type='email' placeholder='joe.bloggs@example.com' required />
        </Label>
        <Label>
          <span>Message</span>
          <TextArea name='message' rows={3} placeholder="Tell us what you're thinking about..." />
        </Label>
        <div>
          <Button type='submit'>Contact Us</Button>
        </div>
      </form>
    </FormContainer>
  )
}

export default ContactForm
