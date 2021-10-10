import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { colors, parameters} from '../global/styles'
import {Button, SocialIcon } from 'react-native-elements'


const RegisterScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.headerRegister}>
                <Text style={parameters.buttonTitle}>
                    Register
                </Text>
            </View>

            <View style={styles.overView}>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Logo</Text>
                </View>

                <View style={{ ...styles.view1, marginTop: 40 }}>
                    <View style={{ borderWidth: 1, borderColor: colors.statusBar, borderRadius: 8, }}>
                        <TextInput
                            style={styles.inputText1}
                            placeholder="Username"
                            textAlign='center'
                        />
                    </View>
                </View>


                <View style={styles.view1}>
                    <View style={{ borderWidth: 1, borderColor: colors.statusBar, borderRadius: 8, }}>
                        <TextInput
                            style={styles.inputText1}
                            placeholder="E-mail"
                            textAlign='center'
                            keyboardType='email-address'
                        />
                    </View>
                </View>

                <View style={styles.view1}>
                    <View style={{ borderWidth: 1, borderColor: colors.statusBar, borderRadius: 8, }}>
                        <TextInput
                            style={styles.inputText1}
                            placeholder="Password"
                            textAlign='center'
                            textContentType='password'
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={styles.view1}>
                    <View style={{ borderWidth: 1, borderColor: colors.statusBar, borderRadius: 8, }}>
                        <TextInput
                            style={styles.inputText1}
                            placeholder="Confirm Password"
                            textAlign='center'
                            textContentType='password'
                            secureTextEntry= {true}
                        />
                    </View>
                </View>

                <View style={styles.viewButton}>
                    <Button
                        title='Continue'
                        buttonStyle={styles.buttonSignIn}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{navigation.navigate('MobileAuthScreen')}}
                         />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.textOR}> OR </Text>
                </View>


                <View style={{ marginHorizontal: 25, marginTop: 10, flex: 3 }}>
                    <SocialIcon
                        title='Sign up with Google'
                        button
                        type='google'
                        style={styles.socialIcon}
                    />
                </View>

            </View>
        </View>

    );
}


export default RegisterScreen;


const styles = StyleSheet.create({
    headerRegister: {
        width: '100%',
        height: 50,
        backgroundColor: colors.statusBar,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10
    },

    headerText: {
        fontSize: 20,
        // fontWeight: 'bold'
        fontFamily:'nunito-bold'
    },

    inputText1: {
        padding: 5,
        fontFamily:'nunito'
    },

    overView: {
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },

    view1: {
        flex: 1,
        marginHorizontal: 10,
    },


    viewButton: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    viewLogo: {
        flex: 2,

    },


    socialIcon: {
        borderRadius: 12,
        height: 50
    },

    buttonSignIn: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        marginHorizontal: 25,

    },

    textOR: {
        // fontWeight: 'bold',
        fontSize: 20,
        fontFamily:'nunito-bold'

    }

});