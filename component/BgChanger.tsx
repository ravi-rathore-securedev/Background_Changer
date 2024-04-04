import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function BgChanger() {
  const [changeColor, setChangeColor] = useState('#ffffff');
  const [boxColor, setBoxColor] = useState('#ffffff');
  const [circleColor, setCircleColor] = useState('#ffffff');
  const [triColor, setTriColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  const backgroundColorChange = () => {
    let color = '#';
    const list = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      color += list[Math.floor(Math.random() * 16)];
    }
    setChangeColor(color);
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += list[Math.floor(Math.random() * 16)];
    }
    setBoxColor(color);
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += list[Math.floor(Math.random() * 16)];
    }
    setCircleColor(color);

    color = '#';
    for (let i = 0; i < 6; i++) {
      color += list[Math.floor(Math.random() * 16)];
    }
    setTriColor(color);
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += list[Math.floor(Math.random() * 16)];
    }
    setTextColor(color);
  };

  return (
    <>
      <View style={[styles.textContainer,{backgroundColor: changeColor}]}>
        <Text style={[styles.texthead,{color:textColor}]}>Background Color Changer</Text>
      </View>
      <View style={[styles.Container, {backgroundColor: changeColor}]}>
        <View style={styles.boxContainer}>
          <View style={[styles.box, {backgroundColor: boxColor}]} />
          <View style={[styles.circle, {backgroundColor: circleColor}]} />
          <View
            style={[
              styles.triangle,
              {backgroundColor: changeColor},
              {borderBottomColor: triColor},
            ]}
          />
        </View>
        <TouchableOpacity onPress={backgroundColorChange}>
          <View style={styles.BtnContainer}>
            <Text style={styles.BtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  textContainer:{
    height:50,
   paddingTop:10
   },
  texthead:{ 
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },
  Container: {
    height: 720,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnContainer: {
    backgroundColor: '#FF4848',
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 8,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#AE1438',
    shadowOpacity: 0.8,
  },
  BtnText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    bottom: 150,
    right: 100,
    borderRadius: 10,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    bottom: 240,
    left: 100,
    borderRadius: 50,
  },
  boxContainer: {},
  triangle: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    position: 'absolute',
  },
});
