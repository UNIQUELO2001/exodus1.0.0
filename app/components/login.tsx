import { YStack, Text, Input, Button, Checkbox, Label, Separator, XStack, Anchor } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../tamagui.config'
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import GoogleIcon from '../styles/GoogleIcon';

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const router = useRouter();

  return (
    <TamaguiProvider config={config}>
        <YStack style={styles.container}>
            <Text style={styles.exodusText}>Exodus</Text>

            <YStack style={styles.emailPassContainter}>
                <Label htmlFor="email">Email or Phone</Label>
                <Input
                id="email"
                placeholder="Email or Phone Number"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                />
            </YStack>

            <YStack style={styles.emailPassContainter}>
                <Label htmlFor="password">Password</Label>
                <Input
                id="password"
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                />
            </YStack>

            <XStack style={styles.rememberContainer}>
                <Checkbox checked={rememberMe} /*onCheckedChange={setRememberMe}*/ id="remember"  style={styles.rememberCheckbox}/>
                <Label htmlFor="remember" style={styles.rememberText}>Remember me</Label>
                <Anchor href='/components/forgotPassword' >
                    <Text style={styles.forgotText}>
                        Forgot password?
                    </Text>
                </Anchor>
            </XStack>

            <Button style={styles.loginButton} onPress={() => router.push('../components/screens/homeScreen')}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </Button>


            <Separator my="$2"/>

                <Text fontSize={14}>--- or ---</Text>  

            <Separator my="$2"/>
            <Button variant="outlined" style={styles.googleButton}>
                <GoogleIcon />
                Login with Google
                </Button>
            <XStack style={styles.signupContainer}>
                <Text style={styles.signupText}>
                New to Exodus?
                <Anchor href='./signUp' style={styles.signupLink}>Sign Up</Anchor>
            </Text>
            </XStack>
        </YStack>
    </TamaguiProvider>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        backgroundColor: '#FFF1E3'
    },

    exodusText: {
        fontSize: 30,
        fontWeight: 'bold',

    },

    input: {
        width: 290,
        height: 50
    },

    emailPassContainter: {
        margin: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },

    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        margin: 2,
    },

    rememberCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 3,
    },

    rememberText: {
        marginRight: 20,
        marginLeft: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 14,
        fontWeight: '200'
    },

    forgotText: {
        marginLeft: 20,
        paddingRight: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontSize: 14,
        fontWeight: '200'
    },

    loginButton: {
        backgroundColor: '#0A4F3A',
        width: 290,
        height: 45
    },

    loginText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },

    googleButton: {
        width: 290,
        height: 45
    },

    signupContainer: {            
        justifyContent: 'flex-end',   
        marginTop: 5,  
    
    },

    signupText: {
        textAlign: 'right',
        fontSize: 14,
        fontWeight: '200'
    },

    signupLink: {
        marginLeft: 3,
        color: '#FBC71D'
    }


})

