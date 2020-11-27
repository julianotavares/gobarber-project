import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { Container, Title, BackToSigIn, BackToSigInText } from './style'

const SignUp = React.FC = () => {
  const navigation = useNavigation()
  return (

    <>
      <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImg} />
        <View>
          <Title>Crie sua conta</Title>
        </View>
          <Input name="user" icon="mail" placeholder="Usuário" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha"/>

          <Button onPress={() => {}}>Entrar</Button>

         </Container>
      </ScrollView>
      </KeyboardAvoidingView>

    <BackToSigIn onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={20} color="#fff" />
      <BackToSigInText>Voltar para login</BackToSigInText>
    </BackToSigIn>
  </>
  )
}

export default SignUp
