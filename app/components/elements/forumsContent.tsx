import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import React, { useState } from 'react';

import { forums, Forum } from '../data/forumsContent'

export const Search: React.FC = () =>{
    
    const [search, setSearch] = useState('');
    const clearSearch = () => setSearch('');

    return (
        <TamaguiProvider config={config}>
            <XStack
            style={searchStyle.container}
            >
            <Input
                flex={1}
                size="$3"
                placeholder="Search forums..."
                value={search}
                onChangeText={setSearch}
                borderWidth={0}
                bg="transparent"
                color="$color"
            />
            <Icons.Search size={'$3'} color={'#D88632'}/>
            {search.length > 0 && (
                <Button
                variant="outlined"
                size="$2"
                circular
                onPress={clearSearch}
                >
                <Icons.X size={'$3'} color={'#D88632'}/>
                </Button>
            )}
            </XStack>
        </TamaguiProvider>
  );
};
const searchStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 4,
        padding: 3,
        backgroundColor: 'transparent',
        margin: 10
    }
})

export const Content: React.FC = () => {
    const renderItem = ({ item }: { item: Forum }) => (
            <YStack style={styles.contentContainer}>
                <Image source={{ uri: item.cover }} style={styles.image}/>
                <Text fontWeight={'bold'} mb={10}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Button style={styles.button}>
                    <Text color={'#FFF'}>View</Text>
                </Button>
            </YStack>
    
        );

    return (
        <TamaguiProvider config={config}>
            <YStack>
                <YStack style={styles.container}>
                    <YStack>
                        <FlatList
                        data={forums}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                    </YStack>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1E3'
    },

    image: {
        width: '100%',
        height: 250
    },

    contentContainer: {
        margin: 5,
        padding: 3
    },

    button: {
        backgroundColor: '#0A4F3A',
        margin: 10
    }
}) 