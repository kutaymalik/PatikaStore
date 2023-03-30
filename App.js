import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

import product_data from './src/products_data.json';
import ProductCard from './src/ProductCard/ProductCard';

const App = () => {

  const renderProducts = ({item}) => <ProductCard product={item}/>;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.header_title}>PATIKASTORE</Text>

      <SearchBar
              alwaysBounceHorizontal
              placeholder="Search here"
              lightTheme
              inputContainerStyle={{borderRadius:10, borderWidth: 0}}
              containerStyle={{backgroundColor:'#eceff1'}}
            />
      </View>
      

      <View style={styles.cards}>
        <FlatList
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          data={product_data}
          renderItem={renderProducts}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  header: {
    backgroundColor:'#eceff1',
  },

  header_title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
