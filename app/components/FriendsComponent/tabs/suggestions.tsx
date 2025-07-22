// app/suggestions.tsx

import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'

import { friendList } from '../data/friends'
import { Avatar, Text, YStack, XStack, ScrollView } from 'tamagui'
import { Link } from 'expo-router'

import Header from '../header'
import Footer from '../../Footer/footer'

export default function SuggestionsPage() {
  const suggestions = friendList.filter(friend => !friend.isFriends)

  return (
    <TamaguiProvider config={config}>
        <Header />
      <ScrollView background={"#FFF1E3"}>
        <YStack p="$4" >
          {suggestions.map(friend => (
            <Link
              key={friend.id}
              href={{
                pathname: '../FriendsComponent/friends/[id]' as const,
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
