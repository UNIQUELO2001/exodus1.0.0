import { YStack, XStack, Text, Image, Separator, Avatar } from 'tamagui'
import { StyleSheet } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { useVideoPlayer, VideoView } from 'expo-video';

type PostProps = {
  username: string
  video: string
  avatar: string
  caption: string
}

export default function Post({ username, video, avatar, caption }: PostProps) {
    const player = useVideoPlayer(video, player => {
    player.loop = true;
  });

  return (
    <YStack style={styles.container}>

      <XStack style={styles.videoContainer} >
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

        <VideoView player={player} style={styles.video} />
      <Separator />
    </YStack>
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

    video: {
          width: '100%',
          height: 180,
        },

    container: {
      backgroundColor: '#FFF1E3'
    },

    videoContainer: {
      alignItems: 'center',
      padding: 3,
    }

})
