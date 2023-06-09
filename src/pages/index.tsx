import Cards from '@/Components/Cards'
import { Color } from '@/utils/colors'
import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Box } from '@/Components/Box'
import Grid from '@/Components/Grid'
import ColumnOne from '@/Components/ColumnOne'
import ColumnTwo from '@/Components/ColumnTwo'
import Spacer from '@/Components/Spacer'
import BottomColumns from '@/Components/BottomColumns'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import { useWindowSize } from '@/utils/hooks'
import ContactForm from '@/Components/ContactForm'
import { ListContainer, ListItem } from '@/Components/List'
import { Paragraph } from '@/Components/Paragraph'
import Carousel from '@/Components/Carousel'
import { Waves } from '@/Components/Waves'

const Title = styled.h1`
  font-size: 4em;
  color: ${Color.Black};
  @media (max-width: 768px) {
    font-size: 3em;
    width: 400px;
    padding: 1rem;
    margin: 1rem;
  }
`

const ListDiv = styled.div`
  width: 350px;
  color: ${Color.Green};
  font-size: 1.25em;
  @media (max-width: 768px) {
    margin: 1rem;
    padding: 1rem;
  }
`

const Home: NextPage = () => {
  const title = `Hi, I'm Jake`
  const parallax = useRef<IParallax>(null)

  return (
    <>
      <Head>
        <title>Jake Edgar</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Parallax ref={parallax} pages={1}>
        <ParallaxLayer offset={-0.3} factor={1} speed={-0.3}>
          <Title>{title}</Title>
        </ParallaxLayer>
      </Parallax>
      <Spacer size={10} />
      <Box className='card-body'>
        I am a <strong>Senior Full Stack Software Engineer</strong>, with a passion for <strong>bold beautiful designs</strong> and{' '}
        <strong>blazing load speeds</strong>, but my real super power is bringing people together as a team.
      </Box>
      <Spacer size={5} />
      <Cards />
      <Spacer size={5} />
      <Title>My Projects</Title>
      <Carousel />
      <Spacer size={10} />
      <Grid columns={2}>
        <ColumnOne />
        <ColumnTwo />
      </Grid>

      <Spacer size={3} />
      <BottomColumns />
      <Spacer size={3} />
      <div
        style={{
          zIndex: 10,
        }}
      >
        <Title>Let`s Connect!</Title>
        <Spacer size={5} />

        <Grid columns={2} gap={'8px'}>
          <ListDiv>
            <Paragraph>I am currently open to both contract and Full-Time positions. I am confident I can fill the roll of any of the following:</Paragraph>
            <br />
            <ListContainer color={Color.Green}>
              <ListItem>Front-End Engineer</ListItem>
              <ListItem>Back-End Engineer</ListItem>
              <ListItem>Full-Stack Engineer</ListItem>
              <ListItem>Quality Assurance Engineer</ListItem>
              <ListItem>Etc...</ListItem>
            </ListContainer>
            <br />
            <Paragraph>Please reach out via the following form, and I`ll get back to you as soon as possible.</Paragraph>
          </ListDiv>

          <ContactForm />
          <div
            style={{
              justifyContent: 'center',
              marginLeft: '-1rem',
              position: 'absolute',
            }}
          >
            {/* <Waves /> */}
          </div>
        </Grid>
      </div>
      <Spacer size={3} />
    </>
  )
}

export default Home
