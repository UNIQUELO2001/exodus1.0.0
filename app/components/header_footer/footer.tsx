import { XStack, Button } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';

//import FooterBackground from '../../styles/FooterBackground';


export default function Footer() {
  const router = useRouter();
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path


  return (
    <TamaguiProvider config={config}>
        <XStack style={styles.container}>
        <Button onPress={() => router.push('../screens/homeScreen')} style={styles.button}>
            <Icons.House size="$1.5"  color={isActive('/homeScreen') ? '#FFF' : '#D88632'} strokeWidth={isActive('/homeScreen') ? 2 : 1.5} />
        </Button>
        <Button onPress={() => router.push('../screens/exflixScreen')} style={styles.button}>
            <Icons.Film size="$1.5" color={isActive('/exflixScreen') ? '#FFF' : '#D88632'} strokeWidth={isActive('/exflixScrenn') ? 2 : 1.5}/>
        </Button>
        <Button onPress={() => router.push('../screens/createPostScreen')} style={styles.button}>
            <Icons.Plus size="$1.5" color={isActive('/home') ? '#FFF' : '#D88632'} strokeWidth={isActive('/home') ? 2 : 1.5}/>
        </Button>
        <Button onPress={() => router.push('./shoppingProductScreen')} style={styles.button}>
            <Icons.Store size="$1.5" color={isActive('/shop_products') ? '#FFF' : '#D88632'} strokeWidth={isActive('/shop_products') ? 2 : 1.5}/>
        </Button>
        <Button onPress={() => router.push('./menuScreen')} style={styles.button}>
            <Icons.Menu size="$1.5" color={isActive('/menu') ? '#FFF' : '#D88632'} strokeWidth={isActive('/menu') ? 2 : 1.5}/>
        </Button>
        
        </XStack>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0A4F3A'
  },

  button:{
    backgroundColor: '#0A4F3A'
  }
})

