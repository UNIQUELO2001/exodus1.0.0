import { YStack, XStack, Text, Image, Separator, Avatar } from 'tamagui'
import { StyleSheet } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'


type PostProps = {
  username: string
  image: string
  avatar: string
  caption: string
}

export default function Post({ username, image, avatar, caption }: PostProps) {
  return (
    <TamaguiProvider config={config}>
        <YStack>

            <XStack style={styles.container}>
                <Avatar circular size="$3">
                <Avatar.Image accessibilityLabel={ username } source={{ uri: avatar }} />
                </Avatar>
                <Text ml="$2" fontWeight="600">{username}</Text>
            </XStack>

            <YStack p="$3" gap="$1">
                <Text>
                {caption}
                </Text>
            </YStack>

            <Image source={{ uri: image }} style={styles.image} />
            <XStack style={styles.icons}>
                <Icons.Heart size="$1.5" mr="$3"/>
                <Icons.MessageSquare size="$1.5" mr="$3"/>
                <Icons.Share size="$1.5" mr="$3"/>
                <Icons.Send size="$1.5" mr="$3"/>
                <Icons.Ellipsis size="$1.5" mr="$3"/>
            </XStack>

            <Separator />
    </YStack>
    </TamaguiProvider>
    
  )
}

const styles = StyleSheet.create({
    text: {
    fontSize: 32,
    fontWeight: 'bold',
  },

    icons:{
        justifyContent: 'flex-start',
        position: 'relative',
        padding: 10,
        marginLeft: 5,
    },

    image: {
      width: '100%',
      height: 480
    },

    container: {
        alignItems: 'center',
        padding: 3
    },

})
