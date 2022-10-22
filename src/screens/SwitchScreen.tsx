/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value,
    });
  };
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <HeaderTitle title="Switches" />
        <View style={styles.switchRows}>
          <Text style={styles.switchText}>Is Active</Text>
          <CustomSwitch
            isOn={isActive}
            onChange={value => onChange(value, 'isActive')}
          />
        </View>
        <View style={styles.switchRows}>
          <Text style={styles.switchText}>Is Hungry</Text>
          <CustomSwitch
            isOn={isHungry}
            onChange={value => onChange(value, 'isHungry')}
          />
        </View>
        <View style={styles.switchRows}>
          <Text style={styles.switchText}>Is Happy</Text>
          <CustomSwitch
            isOn={isHappy}
            onChange={value => onChange(value, 'isHappy')}
          />
        </View>
        <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
