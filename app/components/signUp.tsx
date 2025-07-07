import { TamaguiProvider, View } from '@tamagui/core'
import config from '../../tamagui.config'
import { Button, YStack, Text, Anchor, XStack, Label, Input, ZStack, Select, RadioGroup} from 'tamagui';
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import React, { useState } from 'react'

import GoogleIcon from '../styles/GoogleIcon';

export default function SignUp() {
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
  <TamaguiProvider config={config}>
    <YStack style={styles.container}>   
      <Text style={styles.title}>Exodus</Text>
        <Button  onPress={() => {}} style={styles.button}>
          <GoogleIcon />
          <Text style={styles.textButton}>
            Sign up with Google
          </Text>

        </Button>
          <Text>-- or --</Text>
            
          <XStack style={styles.nameLabel}>
            <YStack>
              <Label>First Name</Label>
              <Input
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              style={styles.nameInput}/>
            </YStack>
            <YStack>
              <Label>Last Name</Label>
              <Input
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={styles.nameInput}/>
            </YStack>
          </XStack>
          
          <YStack style={styles.birthdayContainer}>
            <Label>Birthday</Label>
            <XStack>
              <Input
              placeholder="Month"
              value={birthMonth}
              onChangeText={setBirthMonth}/>

              <Input
              placeholder="Day"
              value={birthDay}
              onChangeText={setBirthDay}/>

              <Input
              placeholder="Year"
              value={birthYear}
              onChangeText={setBirthYear}/>
            </XStack>
          </YStack>
          
          <YStack style={styles.genderContainer}>
            <Label>Gender</Label>
              <RadioGroup aria-labelledby="Select one item" name="form" defaultValue="Male">
                <XStack style={styles.radioButtonContainer}>
                  <RadioGroupItemWithLabel  value="Male" label="Male" />
                  <RadioGroupItemWithLabel  value="Female" label="Female" />
                  <RadioGroupItemWithLabel  value="Custom" label="Custom" />
                </XStack>
          </RadioGroup>
          </YStack>

          <YStack>
            <Label>Email or Phone</Label>
            <Input
              placeholder="example123@email.com"
              value={email}
              onChangeText={setEmail}
              style={styles.emailpassInput}/>

            <Label>Password</Label>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.emailpassInput}/>

            <Label>Confirm Password</Label>
            <Input
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.emailpassInput}/>
          </YStack>

          <Button  onPress={() => router.push('./login')} style={styles.button}>
          <Text style={styles.textButton}>
            Create Account
          </Text>

        </Button>
    </YStack>
  </TamaguiProvider>
  )
}

export function RadioGroupItemWithLabel(props: {
  value: string
  label: string
}) {
  const id = `radiogroup-${props.value}`
  return (
    <XStack>
      <RadioGroup.Item value={props.value} id={id} mr={5}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label htmlFor={id} style={styles.radioButtonLabel}>
        {props.label}
      </Label>
    </XStack>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF1E3',
    margin: 2,
    padding: 4,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 4,
  },

  nameLabel: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 344
  },

  nameInput:{
    width: 172
  },

  button: {
    backgroundColor: '#0A4F3A',
    width: 344,
    height: 54,
    margin: 2,
    marginTop: 20
  },

  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  emailpassInput: {
    width: 344,
    height: 51,
    margin: 2
  },

  birthdayContainer: {
    width: 344,
  },

  genderContainer:{
    width: 344,
  },

  radioButtonContainer:{
    width: 344,
    justifyContent: 'center'
  },

  radioButtonLabel:{
    marginRight: 50
  }
})