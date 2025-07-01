import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Footer from '../header_footer/footer';
import Header from '../header_footer/headerHome';
import { posts } from '../data/homeScreenPost'
import Post from '../elements/homeScreenContent'

export default function HomeScreen(){
    return(
        <TamaguiProvider config={config}>
            <Header />
            <YStack style={styles.container}>
                <ScrollView mb="$6">
                    {posts.map((post, index) => (
                    <Post key={index} {...post} />
                    ))}
                </ScrollView>
            </YStack>
            <Footer/>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1E3'
    }
})