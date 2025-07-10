import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import React, { useState } from 'react';

import { friends, Friends } from '../data/friendsContent'

export const Friend: React.FC = () =>{

    const renderItem = ({ item }: { item: Friends }) => (
        <XStack style={styles.contentContainer}>
            <Avatar circular size={'$5'} style={styles.avatar}>
                <Avatar.Image source={{ uri: item.avatar}} />
            </Avatar>
            <YStack>
                <Text fontWeight={'bold'}>{item.name}</Text>
                <XStack>
                    <Button width={80} m={2} background={'#0A4F3A'}>
                        <Icons.Check color={'#FFF'}/>
                    </Button>
                    <Button width={80} m={2} background={'#E31B23'}>
                        <Icons.X color={'#FFF'}/>
                    </Button>
                </XStack>
            </YStack>
        </XStack>
        );

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <XStack style={styles.nav}>
                    <Button style={styles.button}>
                        <Text>
                            Requests
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text>
                            Suggestions
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text>
                            Your Friends
                        </Text>
                    </Button>
                </XStack>
                <FlatList
                    data={friends}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                />
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    nav: {
        justifyContent: 'space-around',
        padding: 4,
        alignItems: 'center',
    },

    separator: {
        alignSelf: 'stretch',
        marginHorizontal: 16,
    },

    button: {
        backgroundColor: 'transparent'
    },

    contentContainer: {
        margin: 4,
        padding: 5
    },

    avatar: {
        margin: 5,
        marginRight: 10
    }
})