import React from 'react';
import { Image } from 'react-native'

import { Container, Title } from './style'

import logoImg from '../../assets/logo.png'

const SignIn = React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça o seu login</Title>
    </Container>
  )
}

export default SignIn
