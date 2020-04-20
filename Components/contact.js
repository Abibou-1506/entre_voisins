import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import voisins from '../Datas/ContactList'
import ContactItem from './contactItem'

class Contact extends React.Component{
    render(){
        return(
            <View style={styles.content}>
                <View style={styles.content_header}>
                    <Text style={styles.app_name}>Entrevoisins</Text>
                    <View style={styles.nav_header}>
                        <View style={styles.content_header}><Button color = "white" title="MY NEIGHBOURS" onPress={() => { }} /></View>
                        <View style={styles.content_header}><Button color="white" title="FAVORITES" onPress={() => { }} /></View>
                    </View>
                </View>
                <View style={styles.content_body}>
                    <FlatList
                        data={voisins}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ContactItem voisin = {item}/>}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#60abfd'
    },
    content_header : {
        flex : 1,
        backgroundColor: '#60abfd'
    },
    content_body : {
        flex : 4,
        backgroundColor : 'white'
    },
    app_name : {
        fontSize : 25,
        padding : 30,
        marginTop : 20,
        color : 'white',
        fontWeight : "bold"
    },
    nav_header: {
        flex: 1,
        backgroundColor: '#60abfd',
        flexDirection : 'row'
    }
}) 
export default Contact