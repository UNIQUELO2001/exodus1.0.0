import { TamaguiProvider } from '@tamagui/core'
import config from '../../../tamagui.config'
import { Button, YStack, Text, Anchor, ScrollView, View, XStack} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import * as Icons from '@tamagui/lucide-icons'

import Footer from '../header_footer/footer';
import Header from '../header_footer/headerShop';
import { posts } from '../data/productPost'
import Post from '../elements/productScreenContent'

export default function ShoppingProduct(){
    return(
        <TamaguiProvider config={config}>
            
            <YStack style={styles.container}>
                <Header />
                <ScrollView>
                    <XStack style={styles.subHeader}>
                        <Text fontWeight={'bold'} fontSize={14}>For you</Text>
                        
                        <Text fontSize={14}>
                            <Icons.MapPin size={14} mr={3} color={'#D88632'}/>
                            Location
                        </Text>
                    </XStack>
                    <View style={styles.productContainer}>
                        {posts.map((post, index) => (
                    <Post key={index} {...post} />
                    ))}
                    </View>
                </ScrollView>
                <Footer/>
            </YStack>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1E3'
    },

    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10,
        paddingHorizontal: 4
        
    },

    subHeader: {
        justifyContent: 'space-between',
        marginLeft: 12,
        marginRight: 12,
        paddingHorizontal: 4
    }
})