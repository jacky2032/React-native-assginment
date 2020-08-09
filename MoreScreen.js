import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const MoreScreen = () =>{
    return(
        <View style ={styles.container}>
        <Text>
            Will be developed further
        </Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MoreScreen;