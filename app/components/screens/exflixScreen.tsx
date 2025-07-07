import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Footer from '../header_footer/footer';
import Header from '../header_footer/headerExflix';
import { posts } from '../data/forYouPost'
import Post from '../elements/forYouScreenContent'

export default function ExflixScreen(){
    return(
        <TamaguiProvider config={config}>
            
            <YStack style={styles.container}>
                <Header />
                <ScrollView>
                    {posts.map((post, index) => (
                    <Post key={index} {...post} />
                    ))}
                </ScrollView>
                <Footer/>
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