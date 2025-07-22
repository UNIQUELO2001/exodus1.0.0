import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack } from 'tamagui'
import { StyleSheet } from 'react-native';

import  FriendsPage  from './tabs/friends'
import Footer from '../Footer/footer'
import Header from './header'

export default function Groups (){

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                    <ScrollView>
                        <FriendsPage />
                    </ScrollView>
                <Footer />
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1E3',
        flex: 1
    }
})