import React from 'react'
import styles from './styles'
import { 
  Logo, 
  Title, 
  Label, 
  Button, 
  Subtitle,
  Container,
  InputField, 
  Background 
} from '../../components/auth'

export default class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
    genderId: '',
    phone: '',
    countryId: '',
    cpf: '',
    subscriber: true
  }

  async componentDidMount() {

  }

  onChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  setSubscriber = (event, sub) => {
    event.preventDefault()
    this.setState({ subscriber: sub })
  }

  render() {
    const { 
      name, email, pass, 
      confirmPass, genderId, phone,
      countryId, cpf, subscriber
    } = this.state
    return (
      <Background scroll>
        <Container>
          <Logo />
          
          <Title>Conclua seu cadastro</Title>
          <Subtitle>Preencha o formulário para criar seu login</Subtitle>
          
          <form>
            <InputField 
              placeholder='Nome Completo'
              value={name}
              name='name'
              label='Nome'
              onChange={this.onChange}
            />              
            
            <InputField 
              placeholder='Seu email'
              inputType='email'
              value={email}
              name='email'
              label='E-mail'
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
            
            <InputField 
              placeholder='Insira novamente a sua senha'
              inputType='password'
              value={confirmPass}
              name='confirmPass'
              label='Confirmar Senha'
              onChange={this.onChange}
            />              
            
            <InputField 
              value={genderId}
              name='genderId'
              label='Gênero'
              as='select'
              data={[
                { key: 'm', value: 1, label: 'masculino' }
              ]}
              onChange={this.onChange}
            />             
            
            <InputField 
              placeholder='Insira seu telefone com DDD'
              name='phone'
              inputType='tel'
              value={phone}
              label='Telefone'
              onChange={this.onChange}
            />             
            
            <InputField 
              value={countryId}
              name='countryId'
              label='País'
              as='select'
              onChange={this.onChange}
            />
            
            <InputField 
              placeholder='Insira o número do CPF'
              value={cpf}
              name='cpf'
              inputType='number'
              label='Número de cpf'
              onChange={this.onChange}
            />
            
            <Label>Deseja receber nossa newsletter?</Label>

            <Button color={subscriber ? '': 'black'}
              onClick={event => this.setSubscriber(event, true)}
              style={styles.buttonMargin}>
              Sim
            </Button>

            <Button color={subscriber ? 'black': ''}
              onClick={event => this.setSubscriber(event, false)}>
              Não
            </Button>
            
            <Button block>COMEÇAR</Button>
          </form>
        </Container>
      </Background>
      )
    }
  }
  