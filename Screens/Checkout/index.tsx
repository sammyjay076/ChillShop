import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = {};

interface ICheckoutProps {
  checkoutItems: any;
  removeItemFromCheckout: any;
  navigation: any;
  setCheckoutItems: any;
}

const Checkout: React.FC<ICheckoutProps> = ({
  checkoutItems,
  removeItemFromCheckout,
  navigation,
  setCheckoutItems,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={checkoutItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => removeItemFromCheckout(item)}>
              <Text style={{ color: "blue" }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          // const item = checkoutItems[0]; // Replace [0] with the appropriate index or logic to get the desired item
          // removeItemFromCheckout(item);
          // remove all items
          setCheckoutItems([]);
          navigation.navigate("OrderSuccess");
        }}
      >
        <Text style={{ color: "blue" }}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  product: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
