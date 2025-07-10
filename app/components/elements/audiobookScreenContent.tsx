import { YStack, XStack, Text, Image, Separator, Avatar, Button, Input } from 'tamagui'
import { StyleSheet, FlatList } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { Tamagui, TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import React, { useState } from 'react';
import { recommended, newAudiobook, NewAudiobook, justiceAudiobook, JusticeAudiobook } from '../data/audiobookContent'

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
                placeholder="Search books..."
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

const Recommended: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % recommended.length);
    };

    const handleBack = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? recommended.length - 1 : prevIndex - 1
    );
    };

    const currentBook = recommended[index];
    return(
        <TamaguiProvider config={config}>
            <YStack style={recommendedStyle.container}>
                <Text fontWeight={'bold'}>Recommended for you</Text>
                <XStack style={recommendedStyle.coverContainer}>
                    <Image source={{ uri: currentBook.cover }} style={recommendedStyle.cover}/>
                </XStack>
                <XStack style={recommendedStyle.coverContainer}>
                    <Button onPress={handleBack} style={recommendedStyle.coverButton}>
                        <Icons.ChevronLeft color={'#D88632'} size={'$5'}/>
                    </Button>
                    <Button onPress={handleNext} style={recommendedStyle.coverButton}>
                        <Icons.ChevronRight color={'#D88632'} size={'$5'}/>
                    </Button>
                </XStack>
                <YStack style={recommendedStyle.titleContainer}>
                    <Text style={recommendedStyle.title}>{currentBook.title}</Text>
                    <Text style={recommendedStyle.description}>{currentBook.description}</Text>
                    <Button style={recommendedStyle.button}>
                        <Text style={recommendedStyle.textButton}>
                            Read
                        </Text>
                    </Button>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )
}

export default Recommended;

const recommendedStyle = StyleSheet.create ({
    container: {
        backgroundColor: '#FFF1E3',
        padding: 15
    },

    coverContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },

    coverButton: {
        backgroundColor: 'transparent',
        margin: 15
    },

    cover: {
        width: '100%',
        height: 310
    },

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    title: {
        fontWeight: 'bold',
        marginBottom: 10,

    },

    description: {
        marginBottom: 10
    },

    button: {
        width: '100%',
        backgroundColor: '#0A4F3A',
    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    }
})


export const New: React.FC = () =>{
    const renderItem = ({ item }: { item: NewAudiobook }) => (
    <YStack style={newStyle.imageContainer}>
      <Image source={{ uri: item.cover }} style={newStyle.image}/>
      <Text numberOfLines={1} style={newStyle.title}>{item.title}</Text>
    </YStack>
    );

    return(
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <YStack style={newStyle.container}>
                    <Text style={newStyle.header}>New</Text>
                    <YStack>
                        <FlatList
                            horizontal
                            data={newAudiobook}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </YStack>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )
}

const newStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1E3',
        padding: 15
    },

    cover: {
        width: 205,
        height: 310
    },

    imageContainer: {
        padding: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 255,
        height: 205,
        marginBottom: 7
    },

    header: {
        fontWeight: 'bold'
    },

    title: {
        fontWeight: 'bold'
    }
})

export const Justice: React.FC = () =>{
    const renderItem = ({ item }: { item: JusticeAudiobook }) => (
    <YStack style={newStyle.imageContainer}>
      <Image source={{ uri: item.cover }} style={newStyle.image}/>
      <Text numberOfLines={1} style={newStyle.title}>{item.title}</Text>
    </YStack>
    );

    return(
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <YStack style={newStyle.container}>
                    <Text style={newStyle.header}>Justice</Text>
                    <YStack>
                        <FlatList
                            horizontal
                            data={justiceAudiobook}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </YStack>
                </YStack>
            </YStack>
        </TamaguiProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1E3'
    }
})
