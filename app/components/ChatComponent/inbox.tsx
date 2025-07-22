import { chatList } from './data/chats'
import { YStack, XStack, Text, Avatar, ScrollView } from 'tamagui'
import { Link } from 'expo-router'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'

export default function InboxScreen() {
  return (
    <TamaguiProvider config={config}>
      <ScrollView>
        <YStack space="$2" p="$3" background={'#FFF1E3'}>
          {chatList.map((chat) => (
            <Link
                key={chat.id}
                href={{
                    pathname: '../ChatComponent/chat/[id]' as const, // 👈 TypeScript fix
                    params: { id: chat.id },
                }}
                asChild // So it wraps XStack
                >
                <XStack
                    pressStyle={{ opacity: 0.7 }}
                    verticalAlign="center"
                    space="$3"
                >
                    <Avatar circular size="$3">
                      <Avatar.Image source={{ uri: chat.avatar }} />
                    </Avatar>
                    <YStack flex={1}>
                    <Text fontWeight="600">{chat.name}</Text>
                    <Text color="#000">{chat.lastMessage}</Text>
                    </YStack>
                    <Text fontSize={12} color="#000">{chat.time}</Text>
                </XStack>
                </Link>

          ))}
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  )
}
