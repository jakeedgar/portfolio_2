import { Color } from '@/utils/colors'
import { Box, NoLineBox, SlabBox } from './Box'
import Grid from '@/Components/Grid'
import styled from 'styled-components'
import data from '@/data/cards.json'
import { Paragraph } from './Paragraph'
import { useWindowSize } from '@/utils/hooks'

interface CardProps {
  width?: string
}

const Card = styled.div<CardProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  width: ${(p) => p.width || `350px`};
  max-width: 350px;
  height: 240px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${Color.Green};
  color: ${Color.White};

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
  }
`

const Cards: React.FC = () => {
  const windowSize = useWindowSize()

  return (
    <>
      <SlabBox>Where Creativity meets Functionality</SlabBox>
      <Grid columns={2} gap={'8px'}>
        {data.map((item, index) => {
          return (
            <Card width={windowSize.width && windowSize.width < 420 ? '80%' : '350px'} key={`card-${index}`}>
              <NoLineBox fontSize={1.75} width={windowSize.width && windowSize.width > 768 ? '350px' : '100%'}>
                {item.title}
              </NoLineBox>
              <Paragraph>{item.content}</Paragraph>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}

export default Cards
