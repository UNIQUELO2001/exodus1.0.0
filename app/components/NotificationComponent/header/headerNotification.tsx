import { XStack, YStack, ZStack, Text, Separator, Button } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function Header() {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <TamaguiProvider config={config}>
        <YStack>
            <XStack style={styles.container}>
                <Text style={styles.text}>Notification</Text>
                <XStack style={styles.icons}>
                  <Button style={styles.button}>
                    <Icons.Search size="$1.5" color={'#D88632'} onPress={() => router.push('../SearchComponent/search')}/>
                  </Button>
                  <Button style={styles.button} onPress={() => router.push('../screens/notificationScreen')}>
                    <Icons.Ellipsis size="$1.5" color={'#D88632'}/>
                  </Button>
                </XStack>
            </XStack>
            <Separator />
        </YStack>
    </TamaguiProvider>
    

  )
}


const styles = StyleSheet.create({
    text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

    icons:{
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 5,
    },

    container: {
      padding: 4,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF1E3'
    },

    button: {
      backgroundColor:'#FFF1E3'
    }

})

