import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const cities = {
    kl:{
        title: 'Kuala Lumpur',
        image: require('./Images/kl.jpg')
    },
    penang:{
        title: 'Penang',
        image: require('./Images/penang.jpg')
    },
    melaka:{
        title: 'Melaka',
        image: require('./Images/melaka.jpg')
    },
    ipoh:{
        title: 'Ipoh',
        image: require('./Images/ipoh.jpg')
    }
}


export default class DetailScreen extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            boxes :[
                {   id:1,
                    icon: require('./Images/shopping.png'),
                    title: 'Shopping'
                },
                {
                    id:2,
                    icon: require('./Images/tourist.png'),
                    title: 'Attractions'
                },
                {
                    id:3,
                    icon: require('./Images/food.png'),
                    title: 'Food & Drink'
                },
                {
                    id:4,
                    icon: require('./Images/hotel.png'),
                    title: 'Hotel'
                },
                {
                    id:5,
                    icon: require('./Images/history.png'),
                    title: 'History'
                }
           
            ]
        }
    }
    render(){
        city = this.props.navigation.getParam('city')
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {cities[city].image}
                        style = {{width:'100%',height:'100%'}}
                    />
                    <View style = {styles.overlay}>

                        <Text style = {styles.name}>
                            {cities[city].title}
                        </Text>
                    </View>
                </View>
 
                <SafeAreaView style={styles.information}>
                    <FlatList
                        keyExtractor = {(box)=>box.id.toString()}
                        data = {this.state.boxes}
                            renderItem = {({box,index})=>(
                                <TouchableWithoutFeedback
                                    onPress = {()=>this.props.navigation.navigate('More')}
                                >
                                    <View style = {styles.box}>
                                        <Image source = {this.state.boxes[index].icon}
                                        style = {styles.icon}
                                        />
                                        <Text style = {styles.boxTitle}>{this.state.boxes[index].title}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )}
                        numColumns = {2}
                        showsVerticalScrollIndicator = {false}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
        
    },
    header:{
        flex:1,
        position:'relative'
        
    },
    information:{
        flex:1.5,
        backgroundColor:'white',
        justifyContent: 'space-around',

    },
    icon:{
        height:10,
        width:10,
        padding:30
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(150,0,28,.40)',
        justifyContent:'flex-end',
        
    },
    box:{
        margin:20,
        width:155,
        height:170,
        borderRadius:20,
        backgroundColor:'#edf7f6',
        alignItems:'center',
        justifyContent:'space-evenly',
        shadowOffset:{
            width:3,
            height:3
        },
        shadowRadius:9,
        shadowOpacity:0.5,
        elevation:2,
        borderWidth: 0
    },
    boxTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
    name:{
        fontSize: 40,
        color:'white',
        margin:10,
    }
})