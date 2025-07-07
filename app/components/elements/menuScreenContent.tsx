import { XStack, YStack, Button, Text, Separator, Avatar } from 'tamagui'
import * as Icons from '@tamagui/lucide-icons'
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'expo-router';

type PostProps = {
  name: string
  avatar: string
}





export default function Post({ name, avatar }: PostProps) {
    const [open, setOpen] = useState(false)
    const rotation = useSharedValue(0)
    const router = useRouter();

    const toggleDropdown = () => {
    setOpen((prev) => !prev)
    rotation.value = withTiming(open ? 0 : -180, { duration: 200 })
    }


    const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    }
    })

    return(
    <YStack>

                <YStack style={styles.dropdown}>
                    <Button style={styles.button} onPress={toggleDropdown} iconAfter={
                        <Animated.View style={arrowStyle}>
                        <Icons.ChevronDown style={styles.container} size={16} />
                        </Animated.View>
                }>
                    <Avatar circular size="$3">
                    <Avatar.Image accessibilityLabel={ name } source={{ uri: avatar }} />
                    </Avatar>
                    <Text ml="$2" fontWeight="600">{ name }</Text>
                </Button>
                {open && (
                <YStack style={styles.container}>
                    <Button onPress={() => router.push('../screens/profileScreen')}>Option 1</Button>
                    <Button>Option 1</Button>
                    <Button>Option 1</Button>
                </YStack>
            )}

            
                </YStack>
                
        

    </YStack>

        
)}

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
    }

})