import { Color } from '@/utils/colors'
import { styled } from 'styled-components'

export const Paragraph = styled.div`
  font-family: 'Roboto Slab', serif;
  color: ${Color.Green};
  font-size: 1.5em;
  width: 340px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 2rem;
  }
`

const ColumnTwo: React.FC = () => {
  return (
    <>
      <Paragraph>I currently live in rural Ireland with my wonderful wife and four incredible kids.</Paragraph>
      <br />
      <Paragraph>I love music, watching A24 movies, and reading and writing poetry.</Paragraph>
      <br />
      <Paragraph>In fact, I have a few poems published in online journals that I am very proud of.</Paragraph>
    </>
  )
}

export default ColumnTwo
