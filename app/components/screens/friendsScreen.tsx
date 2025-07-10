import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack } from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Header from '../header_footer/headerFriends'
import Footer from '../header_footer/footer'
import { Friend } from '../elements/friendsScreenContent'

export default function FriendsScreen (){

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <Header />
                    <ScrollView>
                        <Friend />
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