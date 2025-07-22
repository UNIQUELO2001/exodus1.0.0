import { YStack, Text, Input, Button, Checkbox, Label, Separator, XStack, Anchor } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';

export default function ForgotPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const router = useRouter();
    const pathname = usePathname();

    return(
        <TamaguiProvider config={config} >
            <YStack style={styles.container}>
                <XStack style={styles.setPasswordContainer}>
                    <Icons.ChevronLeft color={'#D88632'} size={40} onPress={() => router.push('./forgotPassword')}/>
                    <Text style={styles.forgotPasswordText}>
                        Set Password
                    </Text>
                </XStack>
                <YStack style={styles.setPasswordContainer}>
                    <Text style={styles.contentText}>
                    Password requires a minimum of 8 characters and contains a mix of letters, numbers, and symbols.
                    </Text>
                    <Label htmlFor="password">Set password</Label>
                        <Input
                        id="password"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        />

                    <Label htmlFor="password">Confirm password</Label>
                        <Input
                        id="password"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setconfirmPassword}
                        />
                    <Button style={styles.continueButton} onPress={() => router.push('./verificationCode')}>
                        <Text style={styles.continueText}>
                            Login
                        </Text>
                    </Button>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )

}

const styles =StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#FFF1E3',
    },

    setPasswordContainer: {
        position: 'relative',
        justifyContent: 'flex-start',
        marginTop: 100,
        marginLeft: 50,
        marginRight: 50,
    },

    forgotPasswordText: {
        fontWeight: 'bold',
        fontSize: 30
    },

    contentContainer: {
        position: 'relative',
        justifyContent: 'center',
        marginLeft: 50,
        marginRight: 50,
    },

    contentText: {
        color: '#A7A7A7'
    },

    passwordText: {
        fontSize: 12,
    },

    continueButton: {
        marginTop: 15,
        backgroundColor: '#0A4F3A',
        height: 54,
    },

    continueText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
})