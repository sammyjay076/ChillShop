import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {};

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  onpress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  onpress,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 200, width: 150 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/macbook.webp")}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>$ {price}</Text>
      <TouchableOpacity onPress={onpress}>
        <Text style={{ color: "blue" }}>Add to Cart</Text>
      </TouchableOpacity>
      {/* <Text style={styles.description}>{description}</Text> */}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5dee6",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 160,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
