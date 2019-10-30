import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.headerconatiner}>
      <Text style={styles.headertext}>MyTodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerconatiner: {
      marginTop:50,
      marginBottom:50,
    },
    
    headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
    }
  });