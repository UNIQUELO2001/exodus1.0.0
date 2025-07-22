import { useLocalSearchParams, useRouter } from 'expo-router'
import { chatList } from '../data/chats'
import { YStack, XStack, Text, Input, Button, ScrollView, Separator } from 'tamagui'
import { useState } from 'react'
import * as Icons from '@tamagui/lucide-icons'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import { StyleSheet } from 'react-native';

export default function ChatBox() {
  const { id } = useLocalSearchParams()
  const chat = chatList.find(c => c.id === id)
  const router = useRouter();

  const [messages, setMessages] = useState(chat?.messages || [])
  const [message, setMessage] = useState('')

  const send = () => {
    if (!message.trim()) return
    setMessages([...messages, { from: 'me', text: message }])
    setMessage('')
  }

  if (!chat) return <Text>Chat not found</Text>

  return (
    <TamaguiProvider config={config}>
        <YStack flex={1} p="$3" background={'#FFF1E3'}>
          <YStack>
            <XStack >
                <Button onPress={() => router.push('../')} style= {{ backgroundColor: 'transparent' }}>
                    <Icons.ChevronLeft size="$1.5" color={'#D88632'}/>
                </Button>
                <Text></Text>
            </XStack>
            <Separator />
          </YStack>
        <ScrollView flex={1}>
            <YStack space="$2">
            {messages.map((msg, idx) => (
                <XStack key={idx} justify={msg.from === 'me' ? 'flex-end' : 'flex-start'}>
                <Text
                    background={msg.from === 'me' ? '$blue10' : '$gray5'}
                    color="white"
                    px="$3"
                    py="$2"
                    style= {{ borderRadius: 10 }}
                >
                    {msg.text}
                </Text>
                </XStack>
            ))}
            </YStack>
        </ScrollView>

        <XStack space="$2" verticalAlign="center">
            <Input
            flex={1}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message"
            />
            <Button onPress={send}>Send</Button>
        </XStack>
        </YStack>
    </TamaguiProvider>
  )
}

