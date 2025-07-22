import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input, Card } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import React, { useState } from 'react';

import { Achievement, achievements } from './data/badgesData'

export const Badges: React.FC = () => {

    const renderItem = ({ item }: { item: Achievement }) => (
        <Card 
        elevate 
        size="$3"
        background={'#FBC71D'}
        m={'$2'}
        p={'$4'}
        height={150}
        shadowColor="black"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.2}
        shadowRadius={6}>
            <Card.Header>
                <Text color={'#61281F'} fontSize={'$8'}>Achievement</Text>
            </Card.Header>
            <YStack ml={'$3'}>
                <Text fontSize={'$7'}>{item.description}</Text>
            </YStack>
            <Card.Footer ml={'$3'}>
                <YStack>
                <Text color={'#4E4E4E'}>{item.date}</Text>
            </YStack>
            </Card.Footer>
        </Card>
    );

    return (
        <TamaguiProvider config={config}>
            <FlatList
                data={achievements}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </TamaguiProvider>
    )
}