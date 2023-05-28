import { Color } from '@/utils/colors'
import { useContactForm, useWindowSize } from '@/utils/hooks'
import styled from 'styled-components'
import { NoLineBox } from './Box'
import React from 'react'
import Grid from './Grid'
import Spacer from './Spacer'

const FormContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

interface TextInputProps {
  placeholderColor?: string
  width?: string
}

const TextInput = styled.input<TextInputProps>`
  box-sizing: border-box;
  width: ${(p) => p.width || `150px`};
  height: 31px;
  appearance: none;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Barlow Semi Condensed', sans-serif;
  line-height: inherit;
  border-bottom: 1px solid ${Color.Black};
  padding: 1rem;
  padding-left: 4px;

  &::placeholder {
    color: ${(p) => p.placeholderColor || Color.Black};
  }

  &:focus {
    outline: 0.5px solid ${Color.Green};
  }
`

const TextArea = styled.textarea<TextInputProps>`
  box-sizing: border-box;
  width: ${(p) => p.width || `150px`};
  border: none;
  outline: none;
  border-bottom: 1px solid ${Color.Black};
  padding: 1rem;
  padding-left: 4px;
  display: flex;

  &::placeholder {
    color: ${(p) => p.placeholderColor || Color.Black};
  }

  &:focus {
    outline: 0.5px solid ${Color.Green};
  }
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid ${Color.White};
  background-color: ${Color.Black};
  color: ${Color.White};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  width: 340px;
  height: 50px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #17141395;
  }
`

const ContactForm = () => {
  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT
  const { status, handleFormSubmit } = useContactForm(FORM_ENDPOINT!)
  const windowSize = useWindowSize()

  if (status) {
    return (
      <div
        style={{
          width: '350px',
          justifyContent: 'left',
        }}
      >
        <NoLineBox>
          Thank you!
          <div
            style={{
              padding: '1rem',
            }}
          >
            {status}
          </div>
        </NoLineBox>
      </div>
    )
  }
  return (
    <FormContainer>
      <form method='POST' action={FORM_ENDPOINT} onSubmit={handleFormSubmit}>
        <div
          style={{
            width: '350px',
            justifyContent: 'left',
          }}
        >
          <Grid columns={2} gap={'8px'}>
            <div>
              <TextInput
                width={windowSize.width && windowSize.width > 768 ? '150px' : '334px'}
                type='text'
                name='name'
                placeholder='Your Name...'
                placeholderColor={Color.LightGreen}
              />
              <TextInput
                width={windowSize.width && windowSize.width > 768 ? '150px' : '334px'}
                name='tel'
                type='tel'
                placeholder='Your Phone...'
                placeholderColor={Color.LightGreen}
              />
            </div>
            <div>
              <TextInput
                width={windowSize.width && windowSize.width > 768 ? '150px' : '334px'}
                name='email'
                type='email'
                placeholder='E-Mail...'
                placeholderColor={Color.LightGreen}
                required
              />
              <TextInput
                width={windowSize.width && windowSize.width > 768 ? '150px' : '334px'}
                name='subject'
                type='text'
                placeholder='Subject...'
                placeholderColor={Color.LightGreen}
                required
              />
            </div>
          </Grid>
          <TextArea width='334px' name='message' rows={3} placeholder='Your Message...' placeholderColor={Color.LightGreen} />
        </div>
        <Spacer size={5} />

        <div>
          <Button type='submit'>
            <span
              style={{
                fontSize: '1.5em',
              }}
            >
              Submit
            </span>
          </Button>
        </div>
      </form>
    </FormContainer>
  )
}

export default ContactForm
