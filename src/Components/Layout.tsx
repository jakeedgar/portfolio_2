import { Color } from '@/utils/colors'
import { PropsWithChildren, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.main`
  width: 1050px;
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: 2rem;
  background-color: ${Color.White};
  min-height: 100vh;
  scroll-behavior: smooth;

  @media (min-width: 600px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
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

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: fit-content;
`

const title = '[jakeedgar.dev]'

const useSmoothScroll = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).scrollBehavior
    document.body.style.scrollBehavior = 'smooth'

    return () => {
      document.body.style.scrollBehavior = originalStyle
    }
  }, [])
}

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  useSmoothScroll()
  const handleReturnToTop = () => {
    // TODO: Finish this function
    console.log('Finish me!')
  }
  return (
    <Container>
      <GlassContainer>
        <Title onClick={handleReturnToTop}>{title}</Title>
      </GlassContainer>
      <br />
      {children}
    </Container>
  )
}

export default Layout
