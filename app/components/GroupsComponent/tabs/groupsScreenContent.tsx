import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import React, { useState } from 'react';

import { content, Group } from '../data/groupsContent'

export const Navigator: React.FC = () => {
    return(
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <XStack style={styles.nav}>
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            Your Groups
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            Posts
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            Discover
                        </Text>
                    </Button>
                </XStack>
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

    text: {
        fontWeight: 'bold'
    }

})

export const Content: React.FC = () => {
    const renderItem = ({ item }: { item: Group }) => (
            <XStack style={contentStyles.container}>
                <Avatar size={'$5'} style={contentStyles.avatar}>
                    <Avatar.Image source={{ uri: item.avatar}} />
                </Avatar>
                <YStack>
                    <Text fontWeight={'bold'}>{item.name}</Text>
                    <Text>{item.posts} post(s)</Text>
                </YStack>
                <XStack style={contentStyles.rightContainer}>
                    <Text >{item.time}m</Text>
                    <Button style={contentStyles.button}>
                        <Icons.Ellipsis color={'#D88632'}/>
                    </Button>
                </XStack>
            </XStack>
            );

    return(
        <TamaguiProvider config={config}>
            <YStack>
                <FlatList
                    data={content}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                />
            </YStack>
        </TamaguiProvider>
    )
}

const contentStyles = StyleSheet.create({
    container: {
        flex:1,
        margin: 4,
        padding: 5,
        alignItems:'center',
        backgroundColor: '#F6D1A4'
    },

    avatar: {
        marginRight: 10
    },

    rightContainer: {
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 10,
        alignItems: 'center'
    },

    button: {
        backgroundColor: 'transparent'
    }
})