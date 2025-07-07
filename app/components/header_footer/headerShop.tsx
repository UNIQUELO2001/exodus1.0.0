import { XStack, YStack, ZStack, Text, Separator, Button } from 'tamagui'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import * as Icons from '@tamagui/lucide-icons'
import { useRouter, usePathname } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Header() {

  return (
    <TamaguiProvider config={config}>
        <YStack>
            <XStack style={styles.xContainer}>
                <Text style={styles.text}>Shop</Text>
                <XStack style={styles.icons}>
                    <Icons.CircleUser size="$1.5" mr="$3" color={'#D88632'}/>
                    <Icons.Search size="$1.5" mr="$3" color={'#D88632'}/>
                </XStack>
            </XStack>


            <YStack style={styles.yContainer}>
                <XStack>
                    <Button style={styles.button}>
                        <Text fontSize={18}>Sell</Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text style={styles.navigation}>Products</Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text fontSize={18}>Categories</Text>
                    </Button>
                </XStack>
            </YStack>

            <Separator my={1} />
        </YStack>
    </TamaguiProvider>
    
    

  )
}

const styles = StyleSheet.create({

    xContainer: {
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF1E3'
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    navigation: {
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 15,
        
    },

    yContainer:{
        alignItems: 'center',
        backgroundColor: '#FFF1E3'
    },

    icons:{
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 5,
    },

    separator: {
        alignSelf: 'stretch',
        marginHorizontal: 16,
    },

    button: {
        backgroundColor: '#FFF1E3'
    }

})