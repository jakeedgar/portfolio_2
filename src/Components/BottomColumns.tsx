import { NoLineBox } from './Box'
import Grid from './Grid'
import styled from 'styled-components'

const BigNumber = styled.h1`
  font-size: 2.5em;
`

export const Box = styled.div`
  margin: auto;
  @media (max-width: 520px) {
    display: flex;
    margin-left: 3rem;
  }
`

const BottomColumns: React.FC = () => {
  return (
    <Box
      style={{
        paddingLeft: 0,
      }}
    >
      <Grid columns={3} gap={'12px'}>
        <NoLineBox fontSize={0.75} width='200px'>
          <BigNumber>5+</BigNumber>
          <p>Years of Experience</p>
        </NoLineBox>
        <NoLineBox fontSize={0.75} width='200px'>
          <BigNumber>Dozens</BigNumber>
          <p>Of Completed Full-Stack Projects</p>
        </NoLineBox>
        <NoLineBox fontSize={0.75} width='200px'>
          <BigNumber>49+</BigNumber>
          <p>Endorsements on LinkedIn</p>
        </NoLineBox>
      </Grid>
    </Box>
  )
}

export default BottomColumns
