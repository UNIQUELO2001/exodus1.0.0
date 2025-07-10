import { TamaguiProvider, Theme, View, YStack, Separator, Text, Button, XStack } from 'tamagui'
import config from '../../../tamagui.config'
import Header from '../header_footer/headerMenu'
import Contents from '../elements/menuScreenContent'
import Footer from '../header_footer/footer'
import { user, shortcut } from '../data/menuContents'
import { ScrollView } from 'tamagui'
import Shortcut from '../elements/menuShortcutContent'
import * as Icons from '@tamagui/lucide-icons'
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'expo-router';

type DropdownProps = {
  id: string
  title: string
  icon?: React.ComponentType<any>
  buttons: { label: string; onPress: () => void }[]
  openDropdown: string | null
  setOpenDropdown: (id: string | null) => void
}

const Dropdown = ({
  id,
  title,
  icon: Icon,
  buttons,
  openDropdown,
  setOpenDropdown,
}: DropdownProps) => {
  const isOpen = openDropdown === id
  const rotation = useSharedValue(isOpen ? 180 : 0)

  // Animate arrow based on open state
  const arrowStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }))

  // Handle toggle
const toggle = () => {
    const newOpen = isOpen ? null : id
    setOpenDropdown(newOpen)
    rotation.value = withTiming(newOpen === id ? -180 : 0, { duration: 200 })
  }

    return(
      
      <YStack width="100%">
      <Button width="100%" onPress={toggle} justify="flex-start">
        <XStack width="100%" justify="space-between" verticalAlign="center">
          <XStack verticalAlign="center" >
            {Icon && <Icon size={16} />}
            <Text>{title}</Text>
          </XStack>
          <Animated.View style={arrowStyle}>
            <Icons.ChevronDown size={16} />
          </Animated.View>
        </XStack>
      </Button>

      {isOpen && (
        <YStack  style={styles.buttonArrow} >
          {buttons.map((btn, i) => (
            <Button key={i} size="$3" onPress={btn.onPress}>
              {btn.label}
            </Button>
          ))}
        </YStack>
      )}
    </YStack>
    )

  }

export default function App() {
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const router = useRouter();

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <YStack flex={1}  background={'#FFF1E3'}>
          <Header />
            <ScrollView mb="$6">
                {user.map((post, index) => (
                <Contents key={index} {...post} />
                ))}
            
            
            <Separator mx={1} pb="$5"/>
            <Text pl="$4"> Your Shortcuts</Text>
            <ScrollView mb="$6" horizontal={true} showsHorizontalScrollIndicator={false}>
              <View flexDirection="row" flexWrap="wrap" justify="space-between" px="$4">
                {shortcut.map((post, index) => (
                <Shortcut key={index} {...post} />
                ))}
              </View>
            </ScrollView>
              <View flexDirection="row" flexWrap="wrap" justify="space-between" px="$4" verticalAlign='center'>
                <Button style={styles.button} onPress={() => router.push('../screens/groupsScreen')}>
                  <Icons.Users/>
                  <Text>Groups</Text>
                </Button>
                <Button style={styles.button}>
                  <Icons.Calendar/>
                  <Text>Events</Text>
                </Button>
                <Button style={styles.button} onPress={() => router.push('../screens/savedScreen')}>
                  <Icons.Bookmark/>
                  <Text>Saved</Text>
                </Button>
                <Button style={styles.button} onPress={() => router.push('../screens/friendsScreen')}>
                  <Icons.UserCheck/>
                  <Text>Friends</Text>
                </Button>
                <Button style={styles.button} onPress={() => router.push('../screens/audiobookScreen')}>
                  <Icons.BookAudio/>
                  <Text>Audiobooks</Text>
                </Button>
                <Button style={styles.button} onPress={() => router.push('../screens/booksScreen')}>
                  <Icons.LibraryBig/>
                  <Text>Books</Text>
                </Button>
                <Button width='98%' m='$2' background='#FBC71D' onPress={() => router.push('../screens/forumsScreen')}>
                  <Text>See all</Text>
                </Button>
              
              <YStack flex={1} p="$2"  space="$4" >
                <Dropdown 
                  id="helpSupport"
                  title="Help & Support"
                  icon={Icons.HelpCircle}
                  buttons={[
                    { label: 'Help Center', onPress: () => console.log('Help Center pressed') },
                    { label: 'Account Status', onPress: () => console.log('Account Status pressed') },
                    { label: 'Support Inbox', onPress: () => console.log('Support Inbox pressed') },
                    { label: 'Report a Problem', onPress: () => console.log('Report a Problem pressed') },
                    { label: 'Terms & Policies', onPress: () => console.log('Terms & Policies pressed') }
                  ]}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />

                <Dropdown
                  id="settingsPrivacy"
                  title="Settings & Privacy"
                  icon={Icons.Settings}
                  buttons={[
                    { label: 'Settings', onPress: () => console.log('Settings pressed') },
                    { label: 'Privacy Center', onPress: () => console.log('Privacy Center pressed') },
                    { label: 'Orders and Payments', onPress: () => console.log('Orders and Payments pressed') },
                    { label: 'App Language', onPress: () => console.log('App Language pressed') }
                  ]}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />

                <Dropdown
                  id="aboutUs"
                  title="About Us"
                  icon={Icons.Info}
                  buttons={[
                    { label: 'About Us', onPress: () => console.log('About Us pressed') }
                  ]}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              </YStack>
            
                </View>
            </ScrollView>
          <Footer />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '48%',
    margin: 2,
    backgroundColor: '#FBC71D'
  },

  buttonArrow: {
    borderRadius: 4,
    padding: 3
  },

  dropdown: {
    backgroundColor: 'FFF1E3'
  }
})