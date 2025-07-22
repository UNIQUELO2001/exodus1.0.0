import { YStack, Text, Input, Button, Checkbox, Label, Separator, XStack, Anchor } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const router = useRouter();
    const pathname = usePathname();

    return(
        <TamaguiProvider config={config} >
            <YStack style={styles.container}>
                <XStack style={styles.forgotPasswordContainer}>
                    <Icons.ChevronLeft color={'#D88632'} size={40} onPress={() => router.push('../login')} />
                    <Text style={styles.forgotPasswordText}>
                        Forgot Password
                    </Text>
                </XStack>
                <YStack style={styles.forgotPasswordContainer}>
                    <Text style={styles.contentText}>
                    Enter the email or phone associated with your account, and we’ll email you the verification code to reset your password
                    </Text>
                    <Label htmlFor="email" style={styles.emailText}>Email or Phone</Label>
                        <Input
                        id="email"
                        placeholder="Email or Phone Number"
                        value={email}
                        onChangeText={setEmail}
                        />
                    <Button style={styles.continueButton} onPress={() => router.push('./setPassword')}>
                        <Text style={styles.continueText}>
                            Continue
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

    forgotPasswordContainer: {
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

    emailText: {
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