import React from 'react'
import styles from './styles'
import { 
  Logo, 
  Title, 
  Label, 
  Input, 
  Select, 
  Option, 
  Button, 
  Subtitle,
  Container, 
  Background 
} from '../../components/auth'

export default class Login extends React.Component {
  render() {
    return (
      <Background>
        <Container>
          <Logo />
          
          <Title>Conclua seu cadastro</Title>
          <Subtitle>Preencha o formulário para criar seu login</Subtitle>
          
          <Label>Nome</Label>
          <Input placeholder='Nome' />                
          
          <Label>E-mail</Label>
          <Input placeholder='Nome' />                
          
          <Label>Senha</Label>
          <Input placeholder='Nome' />                
          
          <Label>Confirmar Senha</Label>
          <Input placeholder='Nome' />                
          
          <Label>Gênero</Label>
          <Select>
            <Option>Selecione</Option>
          </Select>                
          
          <Label>Telefone</Label>
          <Input placeholder='Nome' />                
          
          <Label>Pais</Label>
          <Select>
            <Option>Selecione</Option>
          </Select>
          
          <Label>Número de cpf</Label>
          <Input placeholder='Nome' />
          
          <Label>Deseja receber nossa newsletter?</Label>
          <Button style={styles.buttonMargin}>Sim</Button>
          <Button color='black'>Não</Button>
          
          <Button block>COMEÇAR</Button>
        </Container>
      </Background>
      )
    }
  }
  