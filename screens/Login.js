import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";


const Header = () => (
    <View>
        <Text style = {styles.headerText}>Log In</Text>
        <Text style = {styles.headerLine}></Text>
    </View>
);

const QnA = () => (
    <View style = {styles.qna}>
        <TextInput 
            style = {styles.qnaBox}
            inputMode= "email"
            placeholder= "Email Address"
            placeholderTextColor={'grey'}
        />
        <TextInput 
            style = {styles.qnaBox}
            placeholder= "Password"
            placeholderTextColor= {'grey'}
            secureTextEntry= {true}
        />
    </View>
);

const Buttons = () => (
    <View style = {styles.buttonBox}>
        <TouchableOpacity>
            <Text style = {styles.submitButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() =>
            navigation.navigate('Signup')
        }
        ><Text style = {styles.buttonBoxText}>Don't have an account yet? 
        <Text style = {{fontWeight: 700}}> Sign Up!</Text></Text>
        </TouchableOpacity>
    </View>
);

const Login = () => (
    <View style = {styles.container}>
        <Header />
        <QnA />
        <Buttons />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex : 1,
        marginTop: '30%',
        marginStart: '5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: '4vh',
        width: '90%',
    },
    
    headerText: {
        fontWeight: '500',
        fontSize: 40,
        color: '#020182',
        marginTop: '16vh',
    },
    headerLine : {
        border: '1px solid #020182',
        borderCollapse: 'collapse',
        alignSelf: 'center',
        width: '30%',
        marginTop: 16,
    },
    qna : {
        marginTop: 52,
        width: '85%',
    },
    qnaBox : {
        backgroundColor: '#d6e6ff',
        paddingHorizontal: 14,
        paddingVertical: 24,
        marginVertical: 10,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 400,
    },
    buttonBox : {
        marginTop: 18,
        width: '100%',
        textAlign: 'center',
    },
    buttonBoxText : {
        textAlign: 'center',
        marginVertical: 40,
        fontSize: 18,
    },
    submitButton : {
        backgroundColor: '#3535bd',
        borderRadius: 50,
        width: '40%',
        paddingHorizontal: 8,
        paddingVertical: 16,
        paddingBottom: 22,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 600,
        color: '#fff',
    },
})

export default Login;