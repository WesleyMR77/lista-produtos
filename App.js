import React from 'react';
import dados from './data'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';



export default function App(){
  const lista = dados
  console.log(lista)
  const listaOb = lista.map(
    (c,i)=>
    <Text key={i}> {i} - {c.name}, {c.category}, {c.price},  </Text>
  
    )
  const listaImg = lista.map(
    (c,i)=>
    <Image key={i} source={{uri: c.image}} style={{ width: 40, height: 40 }}/> 
   
    )

    return (
      <>

      <Text>{listaOb}</Text>
      <Text>{listaImg}</Text>

      </>
    )
}