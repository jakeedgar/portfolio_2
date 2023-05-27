import { Color } from '@/utils/colors'
import { Box, NoLineBox, SlabBox } from './Box'
import Grid from '@/Components/Grid'
import styled from 'styled-components'
import data from '@/data/cards.json'
import { Paragraph } from './Paragraph'

const Card = styled.div`
  padding-left: 1rem;
  width: 400px;
  height: 240px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid ${Color.Black};
  background-color: ${Color.Green};
  color: ${Color.White};

  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
`

const Cards: React.FC = () => {
  return (
    <>
      <SlabBox>Where Creativity meets Functionality</SlabBox>
      <Grid columns={2} gap={'8px'}>
        {data.map((item, index) => {
          return (
            <Card key={`card-${index}`}>
              <NoLineBox>{item.title}</NoLineBox>
              <Paragraph>{item.content}</Paragraph>
            </Card>
          )
        })}
      </Grid>
    </>
  )
}

export default Cards
