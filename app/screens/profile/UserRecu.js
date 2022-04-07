import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, {useRef} from 'react'
import { Image } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import ForgotPasswordForm from '../../components/profile/ForgotPasswordForm';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserRecu(props) {
   const navigation = props;
    const toastRef=useRef()
    return(
        <View style = {styles.container}>
            <ScrollView>
                <Image
                    source={require("../../../assets/CDS_LOGO_Nuevo.png")}
                    resizeMode="contain"
                    style={styles.img}
                />
               <ForgotPasswordForm navigation={navigation} toastRef={toastRef} />
            </ScrollView>
            <Toast
            ref={toastRef}
            opacity={0.9}
            position="center"

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1954A0",
        height: "100%"
    },
    img: {
        width: "100%",
        height: 200,
        marginTop: 30,
    },
});