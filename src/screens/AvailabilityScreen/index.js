import { View } from 'react-native';
import React from 'react';
import Header from './header';
import { FlatList } from 'react-native-gesture-handler';

const AvailabilityScreen = () => {

  const data = [
    {
      id: '1',
      name: '',
    },
  ];

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={data}
        renderItem={({ item, index }) => <View></View>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default AvailabilityScreen;