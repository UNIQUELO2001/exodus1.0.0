import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Footer from '../header_footer/footer';
import Header from '../header_footer/headerHome';
import { posts, user } from '../data/homeScreenPost'
import Post from '../elements/homeScreenContent'
import MakePost from '../elements/makePostSection'

export default function HomeScreen(){

    const router = useRouter();

    return(
        <TamaguiProvider config={config}>
            <Header />
            <YStack style={styles.container}>
                <ScrollView mb="$6">

                    <XStack onPress={() => router.push('../screens/createPostScreen')}>

                        {user.map((user, index) => (
                            <MakePost key={index} {...user} />
                            ))}

                    </XStack>
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
    },

})