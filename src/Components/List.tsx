import styled from 'styled-components'

interface ListProps {
  color: string
}

export const ListContainer = styled.ul<ListProps>`
  font-family: 'Roboto Slab', serif;
  font-size: 1em;
  padding-left: 2rem;
  color: ${(p) => p.color || 'inherit'};
`

export const ListItem = styled.li``
