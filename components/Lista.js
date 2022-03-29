import { FlatList, StyleSheet, Text, View } from 'react-native';

function OutraLista({itens}){
    return (
        <>
            <Text>Lista de coisas boas: </Text>
            {
                itens.map((item, index) => (
                    <Text key={index}>{item}</Text>
                ))}      
        </>
    )
}

export default Lista