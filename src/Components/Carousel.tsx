import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import sparkblox from '../../public/sparkblox.png'
import placeholder from '../../public/placeholder.png'
import { useWindowSize } from '@/utils/hooks'
import { styled } from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    padding: 1rem;
    text-align: left;
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
