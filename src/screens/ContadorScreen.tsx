import React , {useState} from 'react'
import {View,Text,Button,  StyleSheet} from 'react-native'
import { Fab } from '../componets/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador : {contador}
            </Text>
            
            <Button
            onPress={()=>setContador(contador + 1)}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            /> 

            <Fab
            title="+1"
            position='br'
            onPress={()=>setContador(contador + 1)}
            />
             <Fab
            title="-1"
            position='bl'
            onPress={()=>setContador(contador - 1)}
            />

            {/* <TouchableOpacity
            style={styles.fabLocationBR}
             onPress={()=>setContador(contador + 1)}>
                <View style={styles.fab}>
                     <Text style={styles.fabText}>+1</Text>
                </View>  
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={()=>setContador(contador - 1)}>
                <View style={styles.fab}>
                     <Text style={styles.fabText}>-1</Text>
                </View>  
            </TouchableOpacity> */}
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        textAlign:'center',
        fontSize:40,
        top:-15
    },
  
})
