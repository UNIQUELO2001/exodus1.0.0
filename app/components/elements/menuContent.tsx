import { XStack, YStack, Button, Text, Separator, Avatar, AnimatePresence, Card, View } from 'tamagui'
import * as Icons from '@tamagui/lucide-icons'
import { StyleSheet, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'expo-router';
import config from '../../../tamagui.config'
import { TamaguiProvider } from '@tamagui/core'
import { users, User } from '../data/users'
import { shortcuts, Shortcut } from '../data/menuContents'


export const Profile: React.FC = () =>{
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const rotation = useSharedValue(0)
    const toggleDropdown = () => {
    setOpen((prev) => !prev)
    rotation.value = withTiming(open ? 0 : -180, { duration: 200 })
    }


    const arrowStyle = useAnimatedStyle(() => {
    return {
        transform: [{ rotate: `${rotation.value}deg` }],
    }
    })

    const renderItem = ({ item }: { item: User }) => (
        <YStack style={styles.dropdown}>
                    <Button style={styles.button} onPress={() => setOpen(prev => !prev)} iconAfter={
                        <Animated.View style={arrowStyle}>
                        <Icons.ChevronDown style={styles.container} size={16} />
                        </Animated.View>
                }>
                    <Avatar circular size="$3">
                    <Avatar.Image source={{ uri: item.avatar }} />
                    </Avatar>
                    <Text ml="$2" fontWeight="600">{ item.name }</Text>
                </Button>

            <AnimatePresence>
                    {open && (
                      <Card
                        elevate
                        animation="medium"
                        enterStyle={{ opacity: 0, scale: 0.95 }}
                        exitStyle={{ opacity: 0, scale: 0.95 }}
                        width={'100%'}
                      >
                        <XStack>
                            <Button onPress={() => router.push('../screens/profileScreen')} style={styles.contentButton}>
                                <Text>View Profile</Text>
                            </Button>
                        </XStack>

                      </Card>
                    )}
                  </AnimatePresence>

        </YStack>
    );
    return (
        <TamaguiProvider config={config}>
            <YStack>
                <FlatList
                    data={users}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                />
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 5,
    },

    button:{
        width:'100%',
        height: 60,
        padding: 0,
        justifyContent:'space-around',
        backgroundColor: '#FFF1E3'
    },

    dropdown: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    option: {
        backgroundColor: 'gray',
        borderRadius: 4,
        padding: 3
    },

    contentButton: {
        backgroundColor: '#FFF1E3',
        width: '100%'
    }

})


export const Shortcuts: React.FC = () =>{
    const renderItem = ({ item }: { item: Shortcut }) => (
        <YStack style={shortcutStyles.container}>
            <Avatar circular size={'$3'}>
                <Avatar.Image source={{ uri: item.avatar }} />
            </Avatar>
            <Text>{item.name}</Text>
        </YStack>
    )
    return (
        <TamaguiProvider config={config}>
            <YStack style={shortcutStyles.mainContainer}>
                    <YStack>
                        <Text fontWeight={'bold'}>Your Shortcuts</Text>
                        <YStack>
                            <FlatList
                                horizontal
                                data={shortcuts}
                                keyExtractor={(_, index) => index.toString()}
                                renderItem={renderItem}
                                showsHorizontalScrollIndicator={false}
                            />
                        </YStack>
                    </YStack>
                </YStack>
        </TamaguiProvider>
    )
}

const shortcutStyles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 2,
        justifyContent:'center',
        alignItems: 'center'
    },

    mainContainer: {
        margin: 2,
    }
})

export const Pages: React.FC = () =>{
    const [open, setOpen] = useState(false)
    const router = useRouter();
    return (
        <TamaguiProvider config={config}>
            <YStack>
                <View flexDirection="row" flexWrap="wrap" justify="space-between" px="$4" verticalAlign='center'>
                    <Button style={pageStyles.button} onPress={() => router.push('../screens/groupsScreen')}>
                        <Icons.Users/>
                        <Text>Groups</Text>
                    </Button>
                    <Button style={pageStyles.button}>
                        <Icons.Calendar/>
                        <Text>Events</Text>
                    </Button>
                    <Button style={pageStyles.button} onPress={() => router.push('../screens/savedScreen')}>
                        <Icons.Bookmark/>
                        <Text>Saved</Text>
                    </Button>
                    <Button style={pageStyles.button} onPress={() => router.push('../screens/friendsScreen')}>
                        <Icons.UserCheck/>
                        <Text>Friends</Text>
                    </Button>
                    <Button style={pageStyles.button} onPress={() => router.push('../screens/audiobookScreen')}>
                        <Icons.BookAudio/>
                        <Text>Audiobooks</Text>
                    </Button>
                    <Button style={pageStyles.button} onPress={() => router.push('../screens/booksScreen')}>
                        <Icons.LibraryBig/>
                        <Text>Books</Text>
                    </Button>

                    <AnimatePresence >
                        {open && (
                        <Card 
                            flexDirection="row" 
                            flexWrap="wrap" 
                            justify="space-between"
                            animation="medium"
                            enterStyle={{ opacity: 0, scale: 0.95 }}
                            exitStyle={{ opacity: 0, scale: 0.95 }}
                            width={'100%'}
                            style={pageStyles.card}
                        >
                            <Button style={pageStyles.button} onPress={() => router.push('../screens/badgesScreen')}>
                                <Icons.Badge/>
                                <Text>Badges</Text>
                            </Button>
                            <Button style={pageStyles.button} onPress={() => router.push('../screens/forumsScreen')}>
                                <Icons.MessagesSquare/>
                                <Text>Forums</Text>
                            </Button>
                            <Button style={pageStyles.button} onPress={() => router.push('../screens/pollsScreen')}>
                                <Icons.ChartNoAxesColumn/>
                                <Text>Polls</Text>
                            </Button>
                            <Button style={pageStyles.button} onPress={() => router.push('../screens/surveysScreen')}>
                                <Icons.ClipboardPen/>
                                <Text>Surveys</Text>
                            </Button>
                            <Button style={pageStyles.button} onPress={() => router.push('../screens/petitionsScreen')}>
                                <Icons.ClipboardPenLine/>
                                <Text>Petitions</Text>
                            </Button>
                        </Card>
                        )}
                    </AnimatePresence>
                    <Button style={pageStyles.seeAll} onPress={() => setOpen(prev => !prev)}>
                        {open ? 'See Less' : 'See All'}
                    </Button>
                </View>
            </YStack>
        </TamaguiProvider>
    )
}

const pageStyles = StyleSheet.create({
  button: {
    width: '48%',
    margin: 2,
    backgroundColor: '#FBC71D',
    justifyContent:'flex-start'
  },

  seeAll: {
    width: '100%',
    margin: 2,
    backgroundColor:'#FBC71D',
  },

  card: {
    backgroundColor: '#FFF1E3'
  }

})

export const Bars: React.FC = () =>{
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const router = useRouter();

    return (
        <TamaguiProvider config={config}>
            <YStack >
                <View flexDirection="row" flexWrap="wrap" justify="space-between" px="$4" verticalAlign='center'>
                    <Button style={pageStyles.seeAll} justify='flex-start' onPress={() => setOpen1(prev => !prev)}>
                            <XStack>
                                <Icons.HelpCircle mx={5}/>
                                <Text>Help Center</Text>
                            </XStack>
                    </Button>
                    <AnimatePresence>
                        {open1 && (
                            <Card
                            animation="medium"
                            enterStyle={{ opacity: 0, scale: 0.95 }}
                            exitStyle={{ opacity: 0, scale: 0.95 }}
                            style={barStyles.card}
                            >
                            <Button style={barStyles.button}>
                                <Text>Account Status</Text>
                            </Button>
                            <Button style={barStyles.button}>
                                <Text>Support Inbox</Text>
                            </Button>
                            <Button style={barStyles.button}> 
                                <Text>Report a Problem</Text>
                            </Button>
                            <Button style={barStyles.button}>
                                <Text>Terms & Policies</Text>
                            </Button>
                            </Card>
                        )}
                    </AnimatePresence>

                    <Button style={pageStyles.seeAll} justify='flex-start' onPress={() => setOpen2(prev => !prev)}>
                            <XStack>
                                <Icons.Settings mx={5}/>
                                <Text>Settings & Privacy</Text>
                            </XStack>
                    </Button>
                    <AnimatePresence>
                        {open2 && (
                            <Card
                            animation="medium"
                            enterStyle={{ opacity: 0, scale: 0.95 }}
                            exitStyle={{ opacity: 0, scale: 0.95 }}
                            style={barStyles.card}
                            >
                            <Button style={barStyles.button}>
                                <Text>Privacy Center</Text>
                            </Button>
                            <Button style={barStyles.button}>
                                <Text>Orders and Payments</Text>
                            </Button>
                            <Button style={barStyles.button}> 
                                <Text>App Language</Text>
                            </Button>
                            </Card>
                        )}
                    </AnimatePresence>

                    <Button style={pageStyles.seeAll} justify='flex-start' onPress={() => setOpen3(prev => !prev)}>
                            <XStack >
                                <Icons.Info mx={5}/>
                                <Text>About Us</Text>
                            </XStack>
                    </Button>
                    <AnimatePresence>
                        {open3 && (
                            <Card
                            animation="medium"
                            enterStyle={{ opacity: 0, scale: 0.95 }}
                            exitStyle={{ opacity: 0, scale: 0.95 }}
                            style={barStyles.card}
                            >
                            <Button style={barStyles.button}>
                                <Text>About Us</Text>
                            </Button>
                            </Card>
                        )}
                    </AnimatePresence>
                </View>
            </YStack>
        </TamaguiProvider>
    )
}

const barStyles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    },

    card: {
    backgroundColor: '#FFF1E3',
    width: '100%',
    padding: 4
  },

  button: {
    backgroundColor: '#FFF1E3',
    marginHorizontal: 3
  }
})