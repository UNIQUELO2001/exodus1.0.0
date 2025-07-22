import { TamaguiProvider } from '@tamagui/core'
import config from '../tamagui.config'
import { Button, YStack, Text, Anchor} from 'tamagui'
import { StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import WaveBackgroundTop from './styles/WaveBackgroundTop';
import WaveBackgroundBottom from './styles/WaveBackgroundBottom';

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  return (
  <TamaguiProvider config={config}>
    <YStack style={styles.container}>   
    <WaveBackgroundTop />
        <YStack style={styles.signupContainer}>
          <Text style={styles.exodusText}>
            Exodus
          </Text>
          <Button style={styles.signupButton} onPress={() => router.push('../components/LoginComponent/SignUp/signUp')}>
            <Text style={styles.signupText}> Sign Up </Text>
          </Button>
          <Text style={styles.bottomText}>
            Have an Account? <Anchor asChild>
              <Text onPress={() => router.push('../components/LoginComponent/login')} style={styles.loginText}>
                Log in
              </Text>
              </Anchor>
          </Text>
        </YStack>
    <WaveBackgroundBottom />
    </YStack>
  </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFF1E3'
  },
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },

  signupButton: {
    margin: 2,
    backgroundColor: '#0A4F3A',
    width: 189,
    height: 41,
  },

  exodusText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },

  signupText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  bottomText: {
    color: '#000',
    fontSize: 14,
  },

  loginText: {
    color: '#FBC71D',
  }
})

