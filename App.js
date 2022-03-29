import React from 'react';
import dados from './data'
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';



export default function App(){
  const lista = dados
  console.log(lista)
  const listaOb = lista.map(
    (l,i)=>
    <Text style={styles.text} key={i}> {i} - {l.name}, {l.category}, {l.price}, <Image key={i} source={{uri: l.image}} style={{ width: 40, height: 40 }}/> </Text>
    )
    return (
      <ScrollView style={styles.container} >
        {listaOb}
      </ScrollView> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11111'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  }
})