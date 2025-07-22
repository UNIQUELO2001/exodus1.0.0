import { YStack, Text, Image, Card, Button } from 'tamagui'
import { Dimensions, StyleSheet } from 'react-native'
import * as Icons from '@tamagui/lucide-icons'
import { TamaguiProvider } from '@tamagui/core'
import config from '../../../../tamagui.config'

const CARD_WIDTH = (Dimensions.get('window').width - 48) / 2 // 2 cards, 16px x 3 padding/margin

type ProductProps = {
  title: string
  price: string
  image: string
}

export default function Post({ title, price, image }: ProductProps) {
  return (
    <Card elevate style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <YStack>
        <Text fontWeight="600" fontSize="$4">{title}</Text>
        <Text  mt="$1">{price}</Text>
        <Button mt="$2" size="$2">Add</Button>
      </YStack>
    </Card>
  )
}

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        marginBottom: 4,
        borderRadius: 4,
        backgroundColor: '#FFF1E3',
    },

    image: {
        width: '100%',
        height: 150,
        borderRadius: 10
    }
})