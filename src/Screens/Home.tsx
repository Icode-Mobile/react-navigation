import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      alert('Ok');
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Text> Home </Text>
      <Button
        title='Navegar'
        onPress={() =>
          navigation.navigate('details', {
            name: 'Icode Mobile',
            Year: '2019',
          })
        }
      />
    </View>
  );
}
