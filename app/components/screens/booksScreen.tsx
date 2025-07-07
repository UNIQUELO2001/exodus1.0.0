import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, XStack } from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

import Header from '../header_footer/headerBooks'
import Footer from '../header_footer/footer'
import { New, Fiction, Search } from '../elements/booksScreenContent'
import  Recommended from '../elements/booksScreenContent'

export default function BooksScreen (){

    return (
        <TamaguiProvider config={config}>
            <YStack style={styles.container}>
                <Header />
                    <ScrollView>
                        <Search />
                        <Recommended />
                        
                        
                            <New />
                        
                        <Fiction />
                    </ScrollView>
                <Footer />
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1E3',
        flex: 1
    }
})