import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input, Card } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import React, { useState } from 'react';

import { Poll, polls } from './pollsData'

export const Polls: React.FC = () => {

    const renderItem = ({ item }: { item: Poll }) => (
        <Card 
        elevate 
        size="$3"
        background={'#FBC71D'}
        m={'$2'}
        p={'$3'}
        height={150}
        shadowColor="black"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.2}
        shadowRadius={6}>
            <Card.Header>
                <Text fontWeight={'bold'} fontSize={'$6'}>{item.title}</Text>
                <Text>{item.hour}hrs and {item.minute}min left</Text>
                </Card.Header>
            <YStack ml={'$3'} mb={'$2'}>
                <Text fontWeight={'bold'} fontSize={'$4'}>{item.votes} voted</Text>
            </YStack>
            <Card.Footer ml={'$3'}>
                <XStack flex={1} justify="space-between">
                <YStack style={styles.voted}>
                    <Text>{item.voted}</Text>
                </YStack>
                <Button height={28} width={'$15'} style={styles.button}>
                    <Text color={'#FFF'}>Vote Now</Text>
                </Button>
                </XStack>
            </Card.Footer>
        </Card>
    );

    return (
        <TamaguiProvider config={config}>
            <FlatList
                data={polls}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    voted: {
        backgroundColor: '#F6D1A4',
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#0A4F3A'
    }
})