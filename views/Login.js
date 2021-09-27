import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, useEffect, useRef } from "react";
import { KeyboardAvoidingView, Platform, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {css} from '../assets/css/Css';

export default function Login() {

    const [display, setDisplay]= useState('none');
    const [user, setUser]= useState('null');
    const [password, setPassword]= useState('null');
    const [login, setLogin]= useState('null');

    //Envio do formulario
    async function sendForm()
    {
        let response=await fetch('http://192.168.1.108:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                name: user,
                password: password
        })    

        });
        let json=await response.json();
        if (json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else{
            let userData=await AsyncStorage.setItem('userData',JSON.stringify(json));
            let resData=await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData));
        }

    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container2, css.darkbg]}>
        <View style={css.login__logomarca}>
            <Image source={require('../assets/logomarca.png')} />
        </View>

        <View>  
            <Text style={css.login_msg(display)}>Usuário ou senha inválidos!</Text>
        </View>

        <View style={css.login__form}>
            <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
            <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
            <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                <Text style={css.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )


}    