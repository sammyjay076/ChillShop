import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
