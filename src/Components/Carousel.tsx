import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import sparkblox from '../../public/sparkblox.png'
import placeholder from '../../public/placeholder.png'
import { useWindowSize } from '@/utils/hooks'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 80vw;
  margin-top: 2rem;
  border-radius: 8px;
  @media (max-width: 560px) {
    padding: 1rem;
  }
`

const Carousel = () => {
  const windowSize = useWindowSize()
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    if (windowSize && windowSize.width) {
      setWidth(windowSize.width)
    }
  }, [windowSize])

  const responsive = {
    1024: { items: 1 },
  }

  const items = [
    <Image
      style={{
        borderRadius: '8px',
        objectFit: 'cover',
      }}
      width={width * 0.8}
      data-value={1}
      key='key-1'
      src={sparkblox}
      alt='sparkblox screemshot'
    />,
    <Image
      style={{
        borderRadius: '8px',
        objectFit: 'cover',
      }}
      width={width * 0.8}
      data-value={2}
      key='key-2'
      src={placeholder}
      alt='placeholder screemshot'
    />,
  ]

  return (
    <Container>
      <AliceCarousel animationType='fadeout' animationDuration={800} disableButtonsControls infinite mouseTracking items={items} responsive={responsive} />
    </Container>
  )
}

export default Carousel
