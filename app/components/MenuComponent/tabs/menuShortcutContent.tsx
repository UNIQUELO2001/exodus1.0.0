import { XStack, YStack, Button, Text, Separator, Avatar } from 'tamagui'
import * as Icons from '@tamagui/lucide-icons'
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import React, { useState } from 'react'
import config from '../../../../tamagui.config'
import { TamaguiProvider } from '@tamagui/core'

type PostProps = {
  name: string
  avatar: string
}

export default function Shortcut({ name, avatar }: PostProps) {

    return(
        <TamaguiProvider config={config}>
            <YStack>
                <YStack style={styles.container}>
                    <Avatar circular size="$5">
                    <Avatar.Image accessibilityLabel={ name } source={{ uri: avatar }} />
                    </Avatar>
                    <Text style={styles.text}>{name}</Text>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 2,
        margin: 2
    },
    
    text: {
        fontWeight: 300,
        paddingTop: 2
    }
})