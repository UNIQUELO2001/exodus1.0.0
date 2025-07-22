import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack } from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Header from './header/headerExflix'
import Footer from '../Footer/footer'

import { Reels } from './tabs/exflixShortsContent'

export default function Groups (){

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <Header />
                        <Reels />
                
            </YStack>
            <Footer />
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1E3',
        flex: 1
    }
})