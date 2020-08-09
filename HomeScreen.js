import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView,TextInput,Image,ImageBackground,Dimensions,TouchableWithoutFeedback, Animated } from 'react-native';



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cities : [
        {
          id:'0',
          route: 'kl',  
          name: "Kuala Lumpur",
          image: require('./Images/kl.jpg')
        },
        {
          id:'1',
          route: 'ipoh',  
          name : "Ipoh",
          image: require('./Images/ipoh.jpg')
      
        },
        {
          id:'2',
          route:'penang',
          name : "Penang",
          image: require('./Images/penang.jpg')
        },
        {
          id:'3',
          route:'melaka',
          name: "Melaka",
          image: require('./Images/melaka.jpg')
        }
      ]
    }
  }
  render(){
    return (
      <View style = {styles.container}>
        <ImageBackground source = {require('./Images/background.jpg')} style = {styles.background}>
        <View style = {styles.backgroundOverlay}>
          <View style = {styles.search}>
<TextInput style = {styles.textInput}
  placeholder = {'Where are you going '}
/>
<Image
  source = {require('./Images/search.png')}
  style = {styles.searchImage}
/>
</View>
<View>
<Text style = {styles.title}>
  Let's Explore {'\n'}
  <Text style = {styles.malaysia}>
    Malaysia !
  </Text>
</Text>
</View>
<Text style = {styles.cities}>
  Cities
</Text>
<SafeAreaView style = {{flex:1}}>

<FlatList
    keyExtractor = {(city) => city.id.toString()}
    horizontal = {true}
    data = {this.state.cities}
    renderItem = {({ city,index }) => (
      <TouchableWithoutFeedback
        onPress = {()=> this.props.navigation.navigate('Detail',{city:this.state.cities[index].route})}
      >
        <View style = {styles.box}>
          <ImageBackground source = {this.state.cities[index].image} style = {styles.image}>

          </ImageBackground>
          <View style = {styles.overlay}>
            <Text style = {styles.name}>
              {this.state.cities[index].name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )}
    showsHorizontalScrollIndicator = {false}
  />
</SafeAreaView>
        </View>
        </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    fontFamily: 'sans-serif-thin',
    backgroundColor:'#A6206A',
  },
  backgroundOverlay:{
    backgroundColor:'rgba(0,0,0,.6)',
    flex:1,
  },
  background:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode:'cover',
  },
  search:{
    marginTop:50,
    marginHorizontal:15,
    flexDirection:'row',
    height:50,
    backgroundColor: 'rgba(172,211,217,0.3)',
    borderRadius:10,
    alignItems: 'center',
  },
  searchImage:{
    width:20,
    height:20,
    marginRight:10
  },
  textInput:{
    padding:10,
    flex: 1,
    fontSize:20,
    color:'white'
  },
  title:{
    marginVertical:10,
    marginHorizontal: 15,
    fontSize: 45,
    fontWeight: '900',
    color:'white'
  },
  malaysia:{
    fontSize:50,
    color:'white',
    fontWeight: 'bold'
  },
  cities:{
    fontSize:30,
    marginHorizontal: 15,
    color:'white',
  },

  box:{
    borderRadius:28,
    height: 300,
    margin:15,
    width: 300,
    flex:1,
  },
  image: {
    resizeMode: 'cover',
    flex:1,
    overflow: 'hidden',
    borderRadius:28,
  },
  overlay:{
    position:'absolute',
    justifyContent: 'center',
    borderRadius: 10,
    height:90,
    width:'80%',
    bottom:-50,
    left: 25,
    backgroundColor: 'white',
    shadowOffset: {
      width:1.25,
      height:1.25
    },
    padding:10,
    shadowRadius: 2.5,
    elevation:3,
    shadowOpacity:0.25
  },
  name:{
    textAlign:'left',
    fontSize: 30,
    fontWeight:'bold'
  }
})
