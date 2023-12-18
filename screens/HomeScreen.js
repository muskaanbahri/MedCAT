import React, { cloneElement } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const cam = require('../icons/bar-soap.png');
const aicon=require('../icons/browser.png');
const trivial=require('../icons/health.png');
const cat=require('../icons/paw.png');
import { LinearGradient } from 'expo-linear-gradient';


const Banner = () => (
  <View style={styles.banner}>
    <View style={styles.circle}>
    
    <Image source={cat} style={styles.cat} />
    </View>
    
  </View>
);

const Welcome = () => (
  <View style={styles.welcome}>
    <Text style={styles.title}>
    MedCAT - Medical Consultation and Analysis Tool
    </Text>
    <Text style={styles.subtitle1}> Ask, Analyze, Know
    </Text>
     <Text style={styles.subtitle}> 
     Your Partner in Understanding Health</Text>
  </View>
);

const Trivia = () => (
  <View style={styles.trivia}>
    <Image source={trivial} style={styles.icon3} />
    <Text style={styles.triviatext}>Make informed decisions about your health with MedCAT's comprehensive analysis and reliable information.</Text>
  </View>
);

const ButtonPair = () => (
  <View style={styles.ParentButton}>
    <TouchableOpacity style={styles.buttonback}>
    <Image source={cam} style={styles.icon} />
      <Text style={styles.icontext}>SCAN!</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonback}>
      <Image source={aicon} style={styles.icon2} />
        <Text style={styles.icontext}>MedCAT</Text>
    </TouchableOpacity>


  </View>
);

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.babycontainer}>
      <Banner/>
      <Welcome />
      
      <ButtonPair/>
      <Trivia/>
    </View>
    
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#D6E6FF",
    
  },
  babycontainer:{
    borderRadius:20,
    backgroundColor:'white',
    height:'93%',
    width:'92%',
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'grey',
    borderWidth:3
  },
  banner:{
    height:'25%',
    
    width:'90%',
    borderRadius:15,
    marginBottom:20,
    marginTop:-30
  },
  cat:{
    height:120,
    width:120,
    justifyContent:'center',
    alignSelf:'center',

  },
  circle:{
    height: 170,
    width:170,
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:"#ffc2e2",
    borderRadius:50,
  },
  welcome: {
    marginTop:-30,
    marginBottom: 20,
    padding:5,
    backgroundColor:"#dfe7fd",
    width: '90%',
    borderRadius:15,
    
  },
  title: {
    fontFamily:"Georgia",
    padding:11,
    fontSize: 19,
    fontWeight:"700"
  },
  subtitle: {
    fontSize: 17,
    paddingLeft:11,
    paddingRight:11,
    paddingBottom:11,
    
    fontFamily:"Georgia",
    fontStyle:"italic"
  },
  subtitle1: {
    fontSize: 17,
    paddingLeft:6,
    paddingRight:11,
    paddingBottom:0,
    fontFamily:"Georgia",
    fontWeight:"bold"
    
  },
  ParentButton:{
    flexDirection: 'row',
    marginTop:5
  },
  buttonback:{
    height: 170,
    width:170,
    margin:10,
    backgroundColor:"#D6E6FF",
    borderRadius:20,
    borderWidth:3,
    borderColor:"#5a189a"
  },
  icon: {
    height: 100,
    width:100,
    marginBottom:15,
    marginLeft:43,
    marginTop:10
  },
  icon2: {
    height: 90,
    width:90,
    marginBottom:5,
    marginLeft:42,
    marginTop:30
  },
  icontext:{
    textAlign:'center',
    fontWeight:'bold'
  },
  trivia:{
    display:"flex",
    backgroundColor:'#ffc2e2',
    width: "90%",
    height:'flex',
    justifyContent: 'center',
    flexDirection:'row',
    paddingBottom:10,
    borderRadius:15,
    marginTop:20
    
  },
  triviatext:{
    textAlign:'left',
    width: "80%",
    paddingLeft:20,
    paddingRight:15,
    paddingTop:10
  },
  icon3:{
    height: 60,
    width:60,
    marginLeft:30,
    marginTop:10
  }
  
});

export default HomeScreen;
