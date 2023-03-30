import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        width: Dimensions.get('window').width/2.2,
        backgroundColor: 'lightgrey',
        margin: 10,
        borderRadius: 10,
    },

    image: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width/2.5,
        margin: 10,
        marginBottom: 5,
        borderRadius: 5,
        resizeMode: 'stretch',
    },

    inner_container: {
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },

    title: {
        flexDirection: 'row',
        fontWeight: 'bold',
        fontSize: 18,
    },

    price: {
        fontWeight: 'bold',
        color: 'grey',
    },


    instock: {
        color: 'red',
    },

})