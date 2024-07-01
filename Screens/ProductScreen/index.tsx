import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import products from "../../data/ProductData";
import ProductCard from "../../components/ProductCard";

type Props = {};

const ProductScreen = (props: Props) => {
  return (
    <View>
      <Text>ProductScreen</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
