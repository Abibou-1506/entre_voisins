import React from 'react'
import { View,Image, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'


class ContactItem extends React.Component{
    render(){
        const contactVoisin = this.props.voisin 
        return(
            <View style={styles.main_container}>
                <View style={styles.ico1_container}><Image source={require(contactVoisin.img)} /></View>
                <View style={styles.nom_container}><Text>{contactVoisin.nom}</Text></View>
                <View style={styles.ico1_container}>
                    <Icon name = 'delete'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        borderBottomWidth : 1,
        height : 50,
        borderColor: '#CACACA',
       
    },
    ico_container: {
        flex : 1,
        marginLeft : 10,
         justifyContent: "center"
    },
    ico1_container: {
        flex: 1,
         justifyContent: "center"
    },
    nom_container: {
        flex: 5,
        justifyContent: "center"
    }
})
export default ContactItem