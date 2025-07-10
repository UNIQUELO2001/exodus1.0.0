import { useState } from 'react'
import { YStack, Text, Button, AnimatePresence, Card, XStack } from 'tamagui'
import config from '../../../tamagui.config'
import { TamaguiProvider } from '@tamagui/core'
import { useRouter, usePathname } from 'expo-router';

export default function DropdownAbove() {
  const [open, setOpen] = useState(false)
const router = useRouter();
  return (
    <TamaguiProvider config={config}>
    <YStack space="$4" justify="center" mt="$8">
      {/* Conditional dropdown content above the button */}
      <AnimatePresence>
        {open && (
          <Card
            elevate
            animation="medium"
            enterStyle={{ opacity: 0, scale: 0.95 }}
            exitStyle={{ opacity: 0, scale: 0.95 }}
            padding="$4"
            bordered
            width={250}
          >
            <Text>This is the expanded content above the button.</Text>
            <Text>You can put any elements here.</Text>
          </Card>
        )}
      </AnimatePresence>

      {/* Button moves down when content is shown */}
      <Button onPress={() => setOpen(prev => !prev)}>
        {open ? 'Hide' : 'See All'}
      </Button>

      <Button onPress={() => router.push('../screens/tests2') }></Button>
    </YStack>
    </TamaguiProvider>
  )
}
