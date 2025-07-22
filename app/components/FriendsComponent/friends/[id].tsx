// app/friends/[id].tsx

import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import { useLocalSearchParams } from 'expo-router'
import { Avatar, Text, YStack, ScrollView, Button, XStack, Image } from 'tamagui'
import { ImageBackground, StyleSheet, FlatList } from 'react-native'
import { friendList, Friend } from '../data/friends'
import * as Icons from '@tamagui/lucide-icons'

import Footer from '../../Footer/footer'

export default function FriendProfile() {
  const { id } = useLocalSearchParams()
  const friend = friendList.find(f => f.id === id)

  if (!friend) return <Text>Friend not found</Text>

  const renderItem = () => (
    <YStack>
            <YStack>
              <XStack alignItems={'center'} p='$2'>
                <Avatar size="$5" circular borderWidth={4} borderColor="white">
                  <Avatar.Image source={{ uri: friend.avatar }} />
                </Avatar>
                <Text fontSize="$6" fontWeight="bold" ml={'$2'}>{friend.name}</Text>
              </XStack>
              <Text p='$2'>{friend.caption}</Text>
              <Image source={{ uri: friend.post }} width={'100%'} height={400}/>
              <XStack>
                <Button style={styles.buttonPost}>
                  <Icons.Heart color={'#D88632'}/>
                </Button>
                <Button style={styles.buttonPost}>
                  <Icons.MessageSquare color={'#D88632'}/>
                </Button>
                <Button style={styles.buttonPost}>
                  <Icons.Share color={'#D88632'}/>
                </Button>
                <Button style={styles.buttonPost}>
                  <Icons.Send color={'#D88632'}/>
                </Button>
                <Button style={styles.buttonPost}>
                  <Icons.Ellipsis color={'#D88632'}/>
                </Button>
              </XStack>
            </YStack>
          </YStack>
  );
  return (
    <TamaguiProvider config={config}>
      <YStack flex={1} background="#FFF1E3">

        <ScrollView flex={1}>
          {/* 📸 Cover image with overlapping avatar */}
          <YStack>
            <ImageBackground
              source={{ uri: friend.post }}
              style={{ width: '100%', height: 180 }}
            >
              <YStack alignItems="center" mt={120}>
                <Avatar size="$10" circular borderWidth={4} borderColor="white">
                  <Avatar.Image source={{ uri: friend.avatar }} />
                </Avatar>
              </YStack>
            </ImageBackground>
          </YStack>

          {/* 👤 Info */}
          <YStack p="$5" alignItems="center" mt="$5">
            <Text fontSize="$8" fontWeight="800">{friend.name}</Text>
            <Text textAlign="center" fontSize="$4">{friend.bio}</Text>

            {/* 🎯 Conditional button */}
            <XStack mt="$3">
              {friend.isFriends ? (
                <Button style={styles.buttonAdd}>
                  <Text color={'#FFF'}>Message</Text>
                  </Button>
              ) : (
                <Button style={styles.buttonAdd}>
                  <Icons.Plus color={"#FFF"}/>
                  <Text color={'#FFF'}>Add Friend</Text>
                  </Button>
              )}

                {friend.isFriends ? (
                <Button style={styles.buttonFollow}>
                  <Text color={'#FFF'}>Following</Text>
                  </Button>
              ) : (
                <Button style={styles.buttonFollow}>
                  <Text color={'#FFF'}>Follow</Text>
                  </Button>
              )}

              <Button style={styles.buttonEllipsis}>
                <Icons.Ellipsis color={'#FBC71D'}/>
              </Button>
            </XStack>
          </YStack>
          <YStack>
            <FlatList
              data={friendList}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
            />

          </YStack>
        </ScrollView>

        <Footer />
      </YStack>
    </TamaguiProvider>
  )
}


const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: '#0A4F3A',
    width: 150,
    height: 40,
    margin: 2
  },

  buttonFollow: {
    backgroundColor: '#FBC71D',
    width: 150,
    height: 40,
    margin: 2
  },

  buttonEllipsis: {
    backgroundColor: 'transparent',
    margin: 2
  },

  buttonPost: {
    backgroundColor: 'transparent',
  }
});