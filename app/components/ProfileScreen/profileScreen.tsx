import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { ImageBackground, StyleSheet } from 'react-native';
import { ScrollView, Text, Avatar, YStack, XStack, Button, Image } from 'tamagui';
import { users, posts } from './data/users';
import { useRouter, usePathname } from 'expo-router';

export default function ProfileScreen() {
    const user = users[0];
    const router = useRouter();
    const post = posts[0];


    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <ScrollView>
                <YStack style={styles.headerContainer}>
                    <ImageBackground
                        source={{uri: user.cover}}
                        style={styles.background}>
                        <XStack justify={'space-around'} position='absolute' m={5}>
                            <XStack position='absolute' r={170} >
                                <Button onPress={() => router.push('../')}style={styles.headerButton}>
                                    <Icons.ChevronLeft color='#D88632' size={'$2'}/>
                                </Button>
                            </XStack>
        
                            <XStack position='absolute' l={95}>
                                <Button style={styles.headerButton}>
                                    <Icons.Pen color='#D88632'size={'$2'}/>
                                </Button>
                                <Button style={styles.headerButton}>
                                    <Icons.Search color='#D88632'size={'$2'}/>
                                </Button>
                            </XStack>
                        </XStack>
                        <YStack style={styles.profileContainer}>
                            <Avatar circular size='$8'>
                                <Avatar.Image accessibilityLabel={ user.name } source= {{ uri: user.avatar }}/>
                            </Avatar>
                            <Icons.Camera style={styles.camera}/>
                            <Text>{user.name}</Text>
                            <Text> {user.bio} </Text>
                        </YStack>
                </ImageBackground>

                </YStack>
                    <XStack style={styles.buttonContainer}>
                    <Button style={styles.button} background={'#0A4F3A'}>
                        <Icons.Plus size='$1'color='#FFF'/>
                        <Text color='#FFF'>
                            Add Story
                        </Text>
                    </Button>
                    <Button style={styles.button} background={'#FBC71D'}>
                        <Icons.Pen size='$1'color='#FFF'/>
                        <Text color='#FFF'>
                            Edit Profile
                        </Text>
                    </Button>
                    <Icons.Ellipsis color='#D88632'/>
                </XStack>
                <YStack style={styles.postContainer}>
                    <XStack style={styles.post}>
                        <Avatar circular size={'$5'} marginRight={'$3'}>
                            <Avatar.Image accessibilityLabel={ user.name } source= {{ uri: user.avatar }}/>
                        </Avatar>
                        <Text>{user.name}</Text>
                    </XStack>
                    <Text mb={'$2'}>{post.caption}</Text>
                    <Image
                            source={{ uri: post.image }}
                            style={styles.image}
                          />
                </YStack>
            </ScrollView>
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1E3',
    },

    headerContainer: {
        height: 350,
    },

    headerButton: {
        backgroundColor: 'transparent'
    },

    background: {
        width: '100%',
        height: 250,
        alignItems: 'center'
    },

    profileContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        bottom: -100,
    },

    camera: {
        justifyContent: 'center'
    },

    buttonContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 1
    },

    button: {
        width: '40%',
        margin: 5,
        height: 28
    },

    postContainer: {
        margin: 10
    },

    post: {
        alignItems: 'center'
    },

    image: {
      width: '100%',
      height: 480
    },
})