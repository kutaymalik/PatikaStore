import React from "react";
import { View, Text, Image } from "react-native";
import styles from './ProductCard.style';

const ProductCard = ({product}) => {

    const inStock = product.inStock;

    let content;
    if(inStock){
        content = <Text></Text>
    }
    else{
        content = <Text style={styles.instock}>STOKTA YOK</Text>
    }


    return(

        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL }}/>

            <View style={styles.inner_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} </Text>
                <stock/>
                <View style={styles.instock}>{content}</View>
            </View>
        </View>
    );

};

export default ProductCard;
