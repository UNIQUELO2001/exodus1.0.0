import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import React, { useState } from 'react';

import { events, Event } from '../data/eventsContent'

export const Navigator: React.FC = () => {
    return(
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <XStack style={styles.nav}>
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            Top
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            New
                        </Text>
                    </Button>
                    <Separator style={styles.separator} vertical />
                    <Button style={styles.button}>
                        <Text style={styles.text}>
                            Friends
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
    const renderItem = ({ item }: { item: Event }) => (
            <YStack style={contentStyles.container}>
                <Image source={{ uri: item.cover }} style={contentStyles.image}/>
                <Text fontSize={'$4'}>{item.date}</Text>
                <Text fontWeight={'bold'} fontSize={'$7'} mt={'$2'} mb={'$2'}>{item.title}</Text>
                <Text color={'#A7A7A7'} mb={'$2'}>{item.location}</Text>
                <XStack width={'100%'} >
                    <Button 
                    width={'65%'} 
                    m={'$1'} 
                    style={contentStyles.button}>
                        <Icons.Star color={'#D88632'}/>
                        <Text color={'#FFF'}>Interested</Text>
                    </Button>
                    <Button 
                    width={'35%'} 
                    m={'$1'} 
                    style={contentStyles.button}>
                        <Icons.ExternalLink color={'#D88632'}/>
                    </Button>
                </XStack>
            </YStack>
            );

    return(
        <TamaguiProvider config={config}>
            <YStack m={'$2'}>
                <Text ml={'$3'} fontWeight={'bold'}>
                    Top events for you
                </Text>
                <FlatList
                    data={events}
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
        margin: 5,
        padding: 5,
        alignItems:'flex-start',
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: 300,
        marginBottom: 15
    },

    rightContainer: {
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 10,
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#0A4F3A'
    }
})