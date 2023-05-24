import React from 'react'
import styled from 'styled-components'

interface GridProps {
  columns: number
  gap?: string
  children?: React.ReactNode
}

const GridContainer = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  margin: -${(p: GridProps) => p.gap};
  justify-content: ${(p: GridProps) => (p.columns > 1 ? 'flex-start' : 'center')};

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`

const GridItem = styled.div<GridProps>`
  flex: 0 0 calc(100% / ${(p: GridProps) => p.columns});
  padding: ${(p: GridProps) => p.gap};

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`

const Grid: React.FC<GridProps> = (props: GridProps) => {
  const { columns, gap = '0px', children } = props
  return (
    <GridContainer columns={columns} gap={gap}>
      {React.Children.map(children, (child) => (
        <GridItem columns={columns} gap={gap}>
          {child}
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default Grid
