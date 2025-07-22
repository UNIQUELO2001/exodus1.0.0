import { YStack, XStack, Text, Image, Separator, Avatar } from 'tamagui'
import { StyleSheet } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'

type PostProps = {
  avatar: string
  user: string
  caption: string
  time: string
}

export default function Post({ avatar, user, caption, time }: PostProps) {
    return(
        <TamaguiProvider config={config}>
        <YStack style={styles.container}>
            <XStack style={styles.xContainer}>
                <Avatar circular size='$3' style={styles.avatar}>
                    <Avatar.Image accessibilityLabel={ user } source={{ uri: avatar }}/>
                </Avatar>
                <Text style={styles.user}><Text style={styles.caption}>{user}</Text> {caption }</Text>
                <XStack style={styles.time}>
                    <Text>{time}</Text>
                </XStack>
                <XStack style={styles.option}>
                    <Icons.Ellipsis size="$1.5" />
                </XStack>
            </XStack>
        </YStack>
    </TamaguiProvider>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6D1A4',
        height: 55,
        padding: 10,
        marginTop: 1,
        marginBottom: 1
    },

    xContainer: {
        margin: 2,
        justifyContent: 'space-around'
    },

    avatar: {
        left: '2.5%',
        position: 'absolute'
    },

    user: {
        left: '15%',
        position: 'absolute',
        fontSize: 15,
    },
    caption: {
        fontWeight: 'bold',
    },
    time: {
        right: '9%',
        position: 'absolute',
        fontSize: 15,
    },

    option: {
        right: '2%',
        position: 'absolute',
    }

})