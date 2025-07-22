import { XStack, YStack, Text, Avatar, Button } from 'tamagui';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import { Video, ResizeMode  } from 'expo-av';
import * as Icons from '@tamagui/lucide-icons';
import { TamaguiProvider } from '@tamagui/core';
import config from '../../../../tamagui.config';
import React from 'react';

import { Reel, reels } from '../data/reelsContent';

const { height, width } = Dimensions.get('window');

export const Reels: React.FC = () => {
  const renderItem = ({ item }: { item: Reel }) => (
    <YStack height={height} width={width} position="relative">
      <Video
        source={{ uri: item.video }}
        shouldPlay
        isLooping
        isMuted={false}
        resizeMode={ResizeMode.COVER}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}
        />

      {/* Overlay */}
      <YStack
        justify="flex-end"
        p="$4"
        height="100%"
        space="$3"
        background="rgba(0,0,0,0.2)"
      >
        <XStack verticalAlign="center" space="$2">
          <Avatar size="$3" circular>
            <Avatar.Image source={{ uri: item.avatar }} />
          </Avatar>
          <Text color="white" fontWeight="bold">
            @{item.username}
          </Text>
        </XStack>
        <Text color="white">{item.caption}</Text>

        {/* Floating Buttons */}
        <YStack position="absolute" r="$3" b="$8" verticalAlign="center" space="$4">
          <Button size="$3" circular icon={Icons.Heart} />
          <Button size="$3" circular icon={Icons.MessageCircle} />
          <Button size="$3" circular icon={Icons.Send} />
        </YStack>
      </YStack>
    </YStack>
  );

  return (
    <TamaguiProvider config={config}>
      <FlatList
        data={reels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
            length: height,
            offset: height * index,
            index,
        })}
        />
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
