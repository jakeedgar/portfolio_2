import React from 'react'
import pic from '../../public/jake_pfp 1.png'
import Image from 'next/image'
import { styled } from 'styled-components'
import { Color } from '@/utils/colors'

export const Container = styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 4em;
  width: 350px;
  padding: 1rem 0;
  border-top: 3px solid ${Color.Black};
  border-bottom: 3px solid ${Color.Black};
  @media (max-width: 768px) {
    font-size: 2.5em;
    display: flex;
  }
`
export const ImageContainer = styled.div`
  padding: 1rem 0;
  width: 350px;
  }
`

const ColumnOne: React.FC = () => {
  return (
    <div
      style={{
        paddingLeft: '2rem',
      }}
    >
      <Container>
        A bit about <br /> myself...
      </Container>
      <ImageContainer>
        <Image src={pic} alt='alt text' />
      </ImageContainer>
    </div>
  )
}

export default ColumnOne
