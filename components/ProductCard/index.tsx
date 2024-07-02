import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {};

interface ProductCardProps {
  name: string;
  price: number;
  onpress: () => void;
  image: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  onpress,
  image,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 100,
          width: 150,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "90%", height: "90%", borderRadius: 10 }}
          source={image}
        />
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
        {name}
      </Text>
      <Text style={styles.price}>$ {price}</Text>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.buttonText}>Add to Cart</Text>
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
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#78aafa",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
