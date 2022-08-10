import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>
      <Form onSubmit={ () => signIn(email, password) }>
        <FormTitle>Entrar</FormTitle>
        <Input required type="email" placeholder="Email" onChange={ (e) => setEmail(e.target.value) }/>
        <Input required type="password" placeholder="Senha" onChange={ (e) => setPassword(e.target.value) }/>
        <Button type="submit">
          Acessar
        </Button>

      </Form>
    </Container>
  )
}

export default SignIn;