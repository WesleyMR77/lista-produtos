import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import data from './data.js'


const va = {
  name: 'nome',
  category: 'categoria',
  price: 2000,
  image: 'utl'
}


//alert(data[0].name)

export default function App() {
  return (
    <ScrollView> 
         <FlatList
         //{data.map((data) => <Text>{data}</Text>)}
        // data={[
        //   {key: data[0].name},
        //   {key: data[1].name},
        //   {key: data[2].name},
        //   {key: data[3].name},
        //   {key: data[4].name},
        //   {key: data[5].name},
        //   {key: data[6].name},
        //   {key: data[7].name},
        //   {key: data[8].name},
        //   {key: data[9].name},
        //   {key: data[10].name},
        //   {key: data[11].name},
        //   {key: data[12].name},
        // ]}
        data={[data.name]}
        renderItem={({item}) => <Text>{item.key}</Text>}       
      />    
     
      <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
