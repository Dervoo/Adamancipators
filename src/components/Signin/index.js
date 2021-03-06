import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const Signin = () => {
  return (
    <Container id="/signin">
        <FormWrap>
            <Icon to="/">
                Adamancipator
            </Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>
                        Sign in to your account
                    </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password?</Text>
                    <Text>Create New Account</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default Signin