import React, { useCallback, useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { FormHandles} from '@unform/core'
import { Form } from '@unform/mobile'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './style'

const SignIn = React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])

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
          <Title>Faça o seu login</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email" icon="mail" placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
          />

          <Input
          ref={passwordInputRef}
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={() => {
            formRef.current?.submitForm()
          }}
          />

          <Button onPress={() => {
            formRef.current?.submitForm()
          }}>Entrar

          </Button>
          </Form>


          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>

        </Container>
      </ScrollView>
      </KeyboardAvoidingView>

    <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
      <Icon name="log-in" size={20} color="#ff9900" />
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
  </>
  )
}

export default SignIn
