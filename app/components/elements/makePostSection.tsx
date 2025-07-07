import { YStack, XStack, Text, Image, Separator, Avatar, Button, TextArea } from 'tamagui'
import { StyleSheet } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'


type PostProps = {
  name: string
  avatar: string
}

export default function MakePost({ name, avatar }: PostProps) {
  return (
    <TamaguiProvider config={config}>
            <XStack style={styles.container}>
                <XStack>
                    <Avatar circular size="$5">
                    <Avatar.Image accessibilityLabel={ name } source={{ uri: avatar }} />        
                    </Avatar>
                    <Text style={styles.text}>
                        Make a post...
                    </Text>
                    </XStack>
                    <Icons.Image size={28} color={'#D88632'}/>
            </XStack>

            <Separator />
    </TamaguiProvider>
    
  )
}

const styles = StyleSheet.create({
    text: {
    fontSize: 22,
    color: 'gray',
    marginLeft: 10,
    marginTop: 10
  },



    container: {
        alignItems: 'center',
        padding: 3,
        width: '100%',
        height: 75,
        justifyContent: 'space-between'
    },

})
