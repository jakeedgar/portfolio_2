import { BackgroundSVG } from '@/Components/Background_Svg'
import ContactForm from '@/Components/ContactForm'
import { styled } from 'styled-components'

const StyledSvgBackground = styled(BackgroundSVG)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default function Contact() {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
        }}
      >
        <ContactForm />
      </div>
      <StyledSvgBackground />
    </div>
  )
}
