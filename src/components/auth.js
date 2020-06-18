import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fullWidth = css`
  width: calc(100vw - 20px);
  max-width: 360px;
`

export const Background = styled.div`
  ${props => props.scroll ? 'flex: 1;' : 'height: 100vh;'}
  padding: 10px;
  background-color: black;
`

export const Container = styled.div`
  align-self: center;
  max-width: 360px;
  margin: auto;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Logo = styled.img.attrs({
  src: require('../assets/logo.png')
})``

export const Title = styled.p`
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: white;   
`

const blueTheme = css`
  background-color: #2267a8;
  border: none;
`

const blackTheme = css`
  background-color: black;
  border: 2px solid #2267a8;
`

export const Button = styled.button`
  color: white;
  font-size: 16px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 15px;
  ${props => props.color === 'black' ? blackTheme : blueTheme}
  ${props => props.block && `
    ${fullWidth}
    padding: 1.3rem 0px;
  `}
`

export const Label = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`

const formItem = css`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  font-size: 1rem;
  color: gray;
  ${fullWidth}
`

export const Input = styled.input`
  ${formItem}
  line-height: 2rem;
`

export const Select = styled.select`
  ${formItem}
  padding: 10px 0px;
`

export const Option = styled.option`
  line-height: 2rem;
  background-color: white;
  ${fullWidth}
`

export const Link = styled.a`
  color: #2267a8;
  font-size: 14px;
  text-transform: uppercase;
  ${props => props.clean && 'text-decoration: none;'}
`

export const P = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`

const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding: 5px;
  border: none;
`
export const SocialMedia = ({ icon, ...props }) => (
  <ButtonContainer>
    <FontAwesomeIcon icon={['fab', icon]} size='2x' {...props} />
  </ButtonContainer>
)