import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';

export default function Details() {
  const router = useRoute();

  return (
    <View>
      <Text> Details {router.params.name} </Text>
    </View>
  );
}
