import React from 'react'
import { 
  P,
  Row,
  Logo, 
  Link,
  Button,
  Container, 
  Background,
  InputField,
  SocialMedia
} from '../../components/auth'
import styles from './styles'

export default class Login extends React.Component {
  state = {
    email: '',
    pass: ''
  }

  onChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, pass } = this.state
    return (
      <Background>
        <Container>
          <Row>
            <Logo style={styles.margin.big}/>
          </Row>

          <InputField 
              placeholder='Seu email'
              inputType='email'
              value={email}
              name='email'
              label='Login'
              onChange={this.onChange}
            />
            
            <InputField 
              placeholder='*****'
              inputType='password'
              autoComplete='new-password'
              value={pass}
              name='pass'
              label='Senha'
              onChange={this.onChange}
            /> 

          <Button block style={styles.margin.small}>LOGIN</Button>
          <Row>
            <Link href='/' clean style={styles.margin.tiny}>
              Esqueci minha senha &gt;
            </Link>
          </Row>
          
          <Row>
            <P>Faça seu login usando</P>
          </Row>
          <Row>
            <SocialMedia icon='facebook-f'/>
            <SocialMedia icon='twitter'/>
            <SocialMedia icon='linkedin-in'/>
            <SocialMedia icon='google'/>
          </Row>
          <Button block color='black' style={styles.margin.small}>
            NÃO TENHO LOGIN
          </Button>
          <Row style={styles.margin.small}>
            <Link href='/'>Central de ajuda</Link>
          </Row>
        </Container>
      </Background>
    )
  }
}
