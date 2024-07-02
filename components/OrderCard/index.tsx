import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {};
interface IOrderCardProps {
  item?: any;
}

const OrderCard: React.FC<IOrderCardProps> = ({ item }) => {
  return (
    <View>
      <View style={styles.product}>
        <View style={{ width: "90%" }}>
          <Image
            style={{ width: "100%", height: 100, borderRadius: 10 }}
            source={item.image}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    marginBottom: 16,
    padding: 22,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "regular",
  },
});
