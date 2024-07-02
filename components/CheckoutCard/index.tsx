import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {};
interface ICheckoutCardProps {
  item?: any;
  setOrderItems?: any;
  removeItemFromCheckout?: any;
  checkoutItems?: any;
  addOrderItem?: any;
}

const CheckoutCard: React.FC<ICheckoutCardProps> = ({
  item,
  setOrderItems,
  removeItemFromCheckout,
  checkoutItems,
  addOrderItem,
}) => {
  return (
    <View>
      <View style={styles.product}>
        <View style={{ width: "90%" }}>
          <Image
            style={{ width: "50%", height: 100, borderRadius: 10 }}
            source={item.image}
          />
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>$ {item?.price}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            removeItemFromCheckout(item);
          }}
        >
          <Icon name="delete" size={30} color="#de2a2a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    marginBottom: 16,
    padding: 10,
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
