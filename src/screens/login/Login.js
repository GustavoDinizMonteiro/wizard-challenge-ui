import React from 'react'
import { 
  P,
  Row,
  Logo, 
  Link,
  Label, 
  Input, 
  Button,
  Container, 
  Background,
  SocialMedia
} from '../../components/auth'
import styles from './styles'

export default class Login extends React.Component {
  render() {
    return (
      <Background>
        <Container>
          <Row>
            <Logo style={styles.margin.big}/>
          </Row>

          <Label>Login</Label>
          <Input/>

          <Label>Senha</Label>
          <Input/>

          <Button block style={styles.margin.small}>LOGIN</Button>
          <Row>
            <Link href='/' clean>Esqueci minha senha &gt;</Link>
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
