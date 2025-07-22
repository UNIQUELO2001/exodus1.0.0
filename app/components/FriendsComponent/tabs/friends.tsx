// app/friends.tsx

import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import { Avatar, Text, YStack, XStack, ScrollView } from 'tamagui'
import { Link } from 'expo-router'

import { friendList } from '../data/friends'
import Header from '../header'
import Footer from '../../Footer/footer'

export default function FriendsPage() {
  // Filter only friends
  const friends = friendList.filter(friend => friend.isFriends)

  return (
    <TamaguiProvider config={config}>
      <Header />
      <ScrollView background={'#FFF1E3'}>
        <YStack flex={1} p="$4" >
          {friends.map(friend => (
            <Link
              key={friend.id}
              href={{
                pathname: '../friends/[id]' as const,
                params: { id: friend.id },
              }}
              asChild
            >
              <XStack verticalAlign="center" space="$3" pressStyle={{ opacity: 0.8 }}>
                <Avatar circular size="$3">
                  <Avatar.Image source={{ uri: friend.avatar }} />
                </Avatar>
                <YStack>
                  <Text fontWeight="700">{friend.name}</Text>
                  <Text>{friend.location}</Text>
                </YStack>
              </XStack>
            </Link>
          ))}
        </YStack>
      </ScrollView>
      <Footer />
    </TamaguiProvider>
  )
}
