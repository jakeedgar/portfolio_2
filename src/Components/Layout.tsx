import { Color } from '@/utils/colors'
import { PropsWithChildren, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Container = styled.main`
  width: 1050px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 2rem;

  @media (min-width: 600px) {
    max-width: 540px;
    margin: auto;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    margin: auto;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1050px;
  }
`

const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: ${Color.Black};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`

const title = '[jakeedgar.dev]'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const handleReturnToTop = () => {
    router.push('/')
  }

  return (
    <Container>
      <Title onClick={handleReturnToTop}>{title}</Title>

      <br />
      {children}
    </Container>
  )
}

export default Layout
