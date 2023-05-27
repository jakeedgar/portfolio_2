import { Color } from '@/utils/colors'
import styled from 'styled-components'

export const Box = styled.div`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 2.5em;
  width: 760px;
  padding: 2rem 0;
  border-top: 3px solid ${Color.Black};
  border-bottom: 3px solid ${Color.Black};
  @media (max-width: 768px) {
    font-size: 1.5em;
    width: 400px;
  }
`

interface BoxProps {
  width?: string
  fontSize?: number
}

export const NoLineBox = styled.div<BoxProps>`
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: ${(p) => p.fontSize || '2em'};
  width: ${(p) => p.width || '760px'};
  padding-bottom: 1rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    font-size: ${(p) => p.fontSize || '1.5em'};
    width: ${(p) => p.width || '400px'};
  }
`

export const SlabBox = styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 2.5em;
  width: 760px;
  padding: 2rem 0;
  @media (max-width: 768px) {
    font-size: 1.5em;
    width: 400px;
  }
`

export type GridProps = {
  gap: number
  columns: number
}
