/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItem
}
export const FlatListMenuItem = ({menuItem}:Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=> navigation.navigate(menuItem.component)}
    >
        <View style={styles.container}>
        <Icon name={menuItem.icon} color={'gray'} size={23}/>
        <Text style={styles.itemText}>
          {menuItem.name}
        </Text>
        <View style={{flex:1}}/>
        <Icon name={'chevron-forward-outline'} color={'gray'} size={23} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    itemText:{
        marginLeft:10,
        fontSize: 19,
    }
})