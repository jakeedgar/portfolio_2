import styled from 'styled-components'

interface ListProps {
  color: string
}

export const ListContainer = styled.ul<ListProps>`
  font-family: 'Roboto Slab', serif;
  font-size: 1em;
  padding-left: 2rem;
  color: ${(p) => p.color || 'inherit'};
  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem;
    margin-left: 2rem;
  }
`

export const ListItem = styled.li``
