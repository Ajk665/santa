import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, Image } from 'react-native';

import firebase from 'firebase'
import db from '../config.js'

export default class WelcomeScreen extends React.Component{

    constructor(){
        super()
        this.state ={
            emailId: '',
            password: ''
        }
    }

    userLogin = (emailId, password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() =>{
            return(
                Alert.alert('User Succesfully Logged In')
            )
        })
        .catch(function(error){
            var errorMessage = error.message
            return(
                Alert.alert(errorMessage)
            )
        })
    } 

    userSignUp = (emailId, password) =>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response) =>{
            return(
                Alert.alert('User Added Succesfully')
            )
        })
        .catch(function(error){
            var errorMessage = error.message
            return(
                Alert.alert(errorMessage)
            )
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.text}>
                   <Image source = {require('../assets/SANTA.gif')} style = {{width: 200, height: 200}}></Image>
                   <Text style = {styles.text1}>BOOK SANTA</Text>
                </View>
                <View style = {styles.view}>
                    <TextInput 
                    placeholder = 'example@bookSanta.com' 
                    placeholderTextColor = 'black' 
                    style = {styles.input}
                    KeyboardType = 'email-address'
                    onChangeText = {text =>{this.setState({
                        emailId: text
                    })}}
                    ></TextInput>
                    <TextInput 
                    placeholder = '****************' 
                    placeholderTextColor = 'black' 
                    style = {styles.input}
                    secureTextEntry = {true}
                    onChangeText = {text =>{this.setState({
                        password: text
                    })}}
                    ></TextInput>
                    <TouchableOpacity style = {[styles.button, {marginTop: 25, marginBottom: 20}]} onPress = {() =>{this.userLogin(this.state.emailId, this.state.password)}}>
                        <Text style = {styles.text2}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() =>{this.userSignUp(this.state.emailId, this.state.password)}}>
                        <Text style = {styles.text2}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        paddingBottom: 30,
    },
    view:{
        flex: 1,
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1.5,
        width: 225,
        height: 50,
        borderColor: 'black',
        fontSize: 15,
        margin: 10,
        paddingLeft: 10
    },
    button: {
        borderWidth: 2.5,
        borderRadius: 5,
        width: 125,
        height: 50,
        justfiyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    text2: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    }
})