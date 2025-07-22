import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Footer from '../Footer/footer';
import Header from './header/headerHome';
import { posts, user } from './data/homeScreenPost'
import Post from './posts/homeScreenContent'
import MakePost from '../CreatePostComponent/tabs/makePostSection'

export default function HomeScreen(){

    const router = useRouter();

    return(
        <TamaguiProvider config={config}>
            <Header />
            <YStack style={styles.container}>
                <ScrollView mb="$6">

                    <XStack onPress={() => router.push('../CreatePostComponent/createPostScreen')}>

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