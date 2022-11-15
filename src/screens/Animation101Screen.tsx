/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import { useAntimation } from '../hooks/useAntimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {opacity,position, fadeIn, fadeOut, startMovingPosition} = useAntimation();
  const {theme, theme:{colors}} = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: theme.secondary,
          opacity,
          transform:[{
            translateY:position,
          }],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
        color={colors.primary}
      />
      <Button title="FadeOut" onPress={fadeOut} color={colors.primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
