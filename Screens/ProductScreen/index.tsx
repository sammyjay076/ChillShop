import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import products from "../../data/ProductData";
import ProductCard from "../../components/ProductCard";

type Props = {};
interface IProductScreenProps {
  addItemCheckout: (item: any) => void;
  navigation: any;
}

const ProductScreen: React.FC<IProductScreenProps> = ({
  addItemCheckout,
  navigation,
}) => {
  return (
    <View>
      <Text>ProductScreen</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            description={item.description}
            onpress={() => {
              console.log("Product added to cart.", item);
              addItemCheckout(item);
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
