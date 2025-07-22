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
                <Button style={styles.button} onPress={() => router.push('../')}>
                    <Icons.ChevronLeft size="$1.5" color={'#D88632'}/>
                </Button>
                <Text style={styles.text}>Books</Text>
                <XStack style={styles.icons}>
                    <Button style={styles.button}>
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
      backgroundColor: '#FFF1E3'
    },

    button: {
      backgroundColor:'#FFF1E3'
    }

})

