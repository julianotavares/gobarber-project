import React, { useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles} from '@unform/core'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { Container, Title, BackToSigIn, BackToSigInText } from './style'

const SignUp = React.FC = () => {
  const formRef = useRef<FormHandles>(null)

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
          <Title>Criar uma conta</Title>
        </View>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="user" icon="mail" placeholder="Usuário" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha"/>

          <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
        </Form>
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
