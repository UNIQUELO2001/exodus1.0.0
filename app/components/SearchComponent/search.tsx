import { useState, useRef } from 'react'
import {
  YStack,
  XStack,
  Text,
  ScrollView,
  Input,
  Button,
  Image,
} from 'tamagui'
import { Search, Flame, Clock, UserPlus } from '@tamagui/lucide-icons'
import { Animated, Easing } from 'react-native'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';

import { recentItems, trendingItems, suggestedUsers } from './data/searchData'
import Footer from '../Footer/footer'

export default function SearchPage() {
  const [isOpen, setIsOpen] = useState(false)
  const animatedWidth = useRef(new Animated.Value(0)).current
  const router = useRouter();

  const toggleSearch = () => {
    Animated.timing(animatedWidth, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start()

    setIsOpen(!isOpen)
  }

  const widthInterpolation = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '75%'],
  })

  return (
    <TamaguiProvider config={config}>
    <ScrollView background="#FFF1E3" p="$4">
      {/* 🔍 Animated Search Header */}
      <XStack alignItems="center" justify="space-between" mb="$4">
        <Button onPress={() => router.push('../')} style={{ backgroundColor: 'transparent '}}>
          <Icons.ChevronLeft color={'#D88632'} />
        </Button>
        <Animated.View style={{ width: widthInterpolation }}>
          {isOpen && (
            <Input
              placeholder="Search Exodus"
              background="white"
              borderColor="#ccc"
              borderWidth={1}
              borderRadius="$4"
              px="$3"
              height={40}
            />
          )}
        </Animated.View>
        <Button onPress={toggleSearch} style={{ backgroundColor: 'transparent '}}>
          <Icons.Search color={'#D88632'} />
        </Button>

      </XStack>

      {/* 🕓 Recent Items */}
      <YStack mb="$5">
        <XStack justify="space-between" mb="$2">
          <Text fontWeight="700">Recent</Text>
          <Text color="#EC6E00">See all</Text>
        </XStack>
        <YStack space="$3">
          {recentItems.map((item, i) => (
            <XStack key={i} alignItems="center" space="$2">
              <Clock size={16} color="#EC6E00" />
              <Text>{item}</Text>
              <Text flex={1} />
              <Text>•••</Text>
            </XStack>
          ))}
        </YStack>
      </YStack>

      {/* 🔥 Trending Items */}
      <YStack mb="$5">
        <XStack justify="space-between" mb="$2">
          <Text fontWeight="700">Trending</Text>
          <Text color="#EC6E00">See all</Text>
        </XStack>
        <YStack space="$3">
          {trendingItems.map((item, i) => (
            <XStack key={i} alignItems="center" space="$2">
              <Flame size={16} color="#EC6E00" />
              <Text>{item}</Text>
              <Text flex={1} />
              <Text>•••</Text>
            </XStack>
          ))}
        </YStack>
      </YStack>

      {/* 🧑 People You May Know */}
      <YStack>
        <XStack justify="space-between" mb="$2">
          <Text fontWeight="700">People you may know</Text>
          <Text color="#EC6E00">See all</Text>
        </XStack>

        <XStack space="$4" flexWrap="wrap" justify="space-between">
          {suggestedUsers.map((user) => (
            <YStack key={user.id} width="48%" space="$2" alignItems="center">
              <Image
                source={{ uri: user.avatar }}
                width="100%"
                height={150}
                borderRadius="$4"
              />
              <Text textAlign="center">{user.name}</Text>
              <XStack justify="center" space="$2">
                <Button
                  size="$2"
                  theme="green"
                  borderRadius="$3"
                  icon={UserPlus}
                />
                <Button
                  size="$2"
                  theme="red"
                  borderRadius="$3"
                  iconAfter={<Text color="white">✕</Text>}
                />
              </XStack>
            </YStack>
          ))}
        </XStack>
      </YStack>
    </ScrollView>
    <Footer />
    </TamaguiProvider>
  )
}
