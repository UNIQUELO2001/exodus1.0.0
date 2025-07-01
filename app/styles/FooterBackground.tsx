import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { View } from 'tamagui';
import { TamaguiProvider } from '@tamagui/core'
import config from '../../tamagui.config'
import { StyleSheet } from 'react-native';

const FooterBackground = () => {
  return (
    <TamaguiProvider config={config}>
        <View style={styles.customShape}>
            <svg  viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M151.729 0H0.5V62.5H439.5V0H287.747C279.601 0 271.806 3.31232 266.152 9.17592L242.019 34.2022C230.443 46.2078 211.296 46.4666 199.399 34.7783L172.753 8.59991C167.143 3.08827 159.593 0 151.729 0Z" fill="#0A4F3A"/>
            </svg>
        </View>
    </TamaguiProvider>
    
  );
};

const styles = StyleSheet.create({
    customShape: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
    }
    
})
   
export default FooterBackground;
