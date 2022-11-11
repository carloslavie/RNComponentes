/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Modal, View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button
        title="Abrir Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems:'center',
          }}>
          <View style={{
            backgroundColor:'white',
            width:'80%',
            height:'40%',
            borderRadius:15,
            justifyContent:'center',
            alignItems:'center',
            shadowOffset:{
                width: 0,
                height:10,
            },
            shadowOpacity: 0.25,
            elevation:10,
          }}>
            <Text style={{fontSize:30, fontWeight:'bold'}}>Modal</Text>
            <Text style={{fontSize:20, fontWeight:'normal', marginBottom:20}}>Cuerpo Modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
