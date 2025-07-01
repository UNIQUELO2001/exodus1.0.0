import { XStack, YStack, ZStack, Text, Separator } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function Header() {
  return (
    <TamaguiProvider config={config}>
        <YStack>
            <XStack style={styles.container}>
                <Text style={styles.text}>Exodus</Text>
                <XStack style={styles.icons}>
                    <Icons.Search size="$1.5" mr="$3"/>
                    <Icons.Bell size="$1.5" mr="$3"/>
                    <Icons.MessageSquareText size="$1.5" mr="$3"/>
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
    }

})

