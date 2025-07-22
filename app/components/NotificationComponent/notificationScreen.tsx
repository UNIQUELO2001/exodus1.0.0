import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Footer from '../Footer/footer';
import Header from './header/headerNotification';
import { notifications } from './data/notificationContent'
import Post from './tabs/notificationContent'

export default function NotificationScreen(){

    return(
        <TamaguiProvider config={config}>
            <Header />
            <YStack style={styles.container}>
                <ScrollView mb="$6">
                    {notifications.map((post, index) => (
                    <Post key={index} {...post} />
                    ))}
                </ScrollView>
                <Footer />
            </YStack>
        </TamaguiProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1E3'
    }
})