/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => String(item)}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={()=>(
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinte Scroll" />
          </View>
        )}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={()=>(
        //   <View style={{
        //     height: 150,
        //     width:'100',
        //     justifyContent:'center',
        //     alignItems:'center',
        //   }}>
        //     <ActivityIndicator size={25} color="#5856D6"/>
        //   </View>
        // )}
      />
    </View>
  );
};


