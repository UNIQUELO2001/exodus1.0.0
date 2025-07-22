import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input, ScrollView, Card } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import { savedItems, SavedItem, collectionItems, CollectionItem } from '../data/savedContent'

export const Content: React.FC = () => {
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);

    const renderItem = ({ item }: { item: SavedItem }) => (
                <XStack style={styles.contentContainer}>
                    <Avatar size={'$5'} style={styles.avatar}>
                        <Avatar.Image source={{ uri: item.image}} />
                    </Avatar>
                    <YStack>
                        <Text fontWeight={'bold'}>{item.title}</Text>
                        <Text >Saved {item.timestamp}w ago</Text>
                    </YStack>
                    <XStack style={styles.option}>
                        <Button>
                            <Icons.Ellipsis color={'#D88632'}/>
                        </Button>
                    </XStack>
                </XStack>
                );
    
    const itemsToShow = showAll ? savedItems : savedItems.slice(0, 3);

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <Text fontWeight={'bold'}>Most Recent</Text>
                <FlatList
                    data={itemsToShow}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />

                <Button
                    style={styles.button}
                    color="black"
                    fontWeight="600"
                    onPress={() => setShowAll(!showAll)}
                    >
                    {showAll ? 'Show Less' : 'See All'}
                </Button>
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 2
    },

    contentContainer: {
        margin: 4,
        alignItems: 'center'
    },

    avatar: {
        marginRight: 5
    },

    option: {
        position: 'absolute',
        justifyContent: 'flex-end',
        right: 5
    },

    button: {
        backgroundColor: '#FBC71D',
        marginBottom: 5,
    }
})


export const Collection: React.FC = () => {
    const renderItem = ({ item }: { item: CollectionItem }) => (
        <Card style={collectionStyles.card}>
            <YStack>
                <Image source={{ uri: item.image }} style={collectionStyles.image}/>
                <Text m={5} fontWeight={'bold'}>{item.title}</Text>
                <Text m={5}>{item.privacy}</Text>
            </YStack>
        </Card>

    );

    return (
        <TamaguiProvider config={config}>
            <YStack style={collectionStyles.container}>
                <XStack>
                    <FlatList
                    data={collectionItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                />
                </XStack>
            </YStack>
        </TamaguiProvider>
    )
}

const collectionStyles = StyleSheet.create({
    image: {
        height: 250,
        width: 250
    },

    container: {
        backgroundColor: '#FFF1E3',
        margin: 5,
        padding: 2,
        alignItems: 'center'
    },

    card: {
        backgroundColor: '#F6D1A4',
        margin: 3
    }
})