import { View, Alert } from "react-native"
import { Input, TextArea, Button, XStack, YStack, Avatar, Separator, Text } from "tamagui"
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { StyleSheet } from 'react-native';
import * as Icons from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router';

import { users } from '../data/users'



export default function CreatePost() {
  const user = users[0];
  const router = useRouter();

  return (
    <TamaguiProvider config={config}>
      <YStack style={styles.container}>
        <XStack style={styles.headerContainer}>
          <Button onPress={() => router.push('../')} style={styles.xButton}>
            <Icons.X size={'$3'} m={5}/>
          </Button>
          <Text fontSize={'$9'}>Create Post</Text>
          <Button style={styles.postButton} >
            <Text color={'#FFF'}>
              Post
            </Text>
          </Button>
        </XStack>
        <YStack>
          <XStack style={styles.userContainer}>
            <Avatar circular size="$4" style={styles.avatar}>
              <Avatar.Image accessibilityLabel={ user.name } source={{ uri: user.avatar }} />
            </Avatar>
            <Text style={styles.textUser}>{user.name}</Text>
          </XStack>
          <TextArea placeholder="Want to share something?" style={styles.textArea}/>
          <Button style={styles.button}>
            <Icons.Image />
            <Text style={styles.textButton}>Photo/Video</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.Tag />
            <Text style={styles.textButton}>Tag People</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.ChartNoAxesColumn />
            <Text style={styles.textButton}>Poll</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.ClipboardList />
            <Text style={styles.textButton}>Survey</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.ClipboardPen />
            <Text style={styles.textButton}>Petition</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.Calendar />
            <Text style={styles.textButton}>Event</Text>
          </Button>
          <Button style={styles.button}>
            <Icons.Camera />
            <Text style={styles.textButton}>Camera</Text>
          </Button>
        </YStack>
      </YStack>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#FFF1E3',
        flex: 1
    },

    headerContainer: {
      justifyContent: 'space-between',
      padding: 1
    },

    postButton: {
      backgroundColor: '#0A4F3A',
      width: 85,
      height: 35,
      margin: 5
    },

    userContainer: {
      margin: 15
    },

    avatar: {
      marginRight: 20
    },

    textUser: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 15
    },

    textArea: {
      backgroundColor: '#FFF1E3',
      height: 300,
    },

    button: {
      width: '100%',
      backgroundColor: '#FFF1E3',
      margin: 2,
      alignContent: 'flex-start',
      justifyContent: 'flex-start'
    },

    textButton: {

    },

    xButton: {
      backgroundColor: '#FFF1E3',
      
    }
})