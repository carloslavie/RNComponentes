/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ImageSourcePropType,
  Text,
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useAntimation} from '../hooks/useAntimation';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const {width: screenWidth} = Dimensions.get('window');
const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation<any>();
  const {fadeIn, opacity, position} =
    useAntimation();

  useEffect(() => {
    if (activeIndex === 2) {
      fadeIn();
    //   startMovingPosition(-800, 1800);
    }
  }, [activeIndex]);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 300,
            height: 400,
            resizeMode: 'center',
            backgroundColor:'white',
          }}
        />
        <Text style={{
          ...styles.title, 
          color: colors.primary
          }}>{item.title}</Text>
        <Text style={{...styles.subtitle, color:colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        {activeIndex === 2 && (
            <Animated.View
              style={{
                opacity,
                transform: [
                  {
                    translateY: position,
                  },
                ],
              }}
            >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                width: 110,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Entrar
              </Text>
              <Icon name="chevron-forward-outline" color="white" size={30} />
            </TouchableOpacity>
            </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});
