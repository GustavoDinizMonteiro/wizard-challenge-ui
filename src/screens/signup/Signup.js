import React from 'react'
import Swal from 'sweetalert2'

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
import service from '../../services/wizard'

const mapToOption = data => data.map(el => ({
  key: el.id,
  value: el.id,
  label: el.name   
}))

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
    subscriber: true,
    genders: [],
    countries: []
  }

  async componentDidMount() {
    try {
      const { data: genders } = await service.listGenders()
      const { data: countries } = await service.listCountries()
      this.setState({ genders, countries }, () => console.log(this.state))
    } catch (err) {
      console.warn(err)
    }
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

  submit = async() => {
    try {
      const { 
        name, email, pass,
        confirmPass, genderId, phone,
        countryId, cpf, subscriber
      } = this.state
      
      if (pass !== confirmPass) {
        Swal.fire('Atenção', 'Senha e confirmação de senha não são iguais.', 'info')
        return
      }

      const data = {
        access: { pass, email, phone },
        cpf,
        name, 
        genderId,
        countryId,
        subscriber
      }
      await service.signup(data)
      
      Swal.fire('Sucesso', 'Cadastro realizado com sucesso', 'success')
      this.props.history.push('/')
    } catch (err) {
      console.warn(err)
      Swal.fire('Erro', 'Erro ao realizar o cadastro', 'error')
    }
  }

  render() {
    const { 
      name, email, pass, genders,
      confirmPass, genderId, phone,
      countryId, cpf, subscriber, countries
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
              data={mapToOption(genders)}
              onChange={this.onChange}
            />             
            
            <InputField 
              placeholder='Insira seu telefone com DDD'
              name='phone'
              inputType='number'
              value={phone}
              label='Telefone'
              onChange={this.onChange}
            />             
            
            <InputField 
              value={countryId}
              name='countryId'
              label='País'
              as='select'
              data={mapToOption(countries)}
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
            
          </form>
          <Button block onClick={this.submit}>COMEÇAR</Button>
        </Container>
      </Background>
      )
    }
  }
  