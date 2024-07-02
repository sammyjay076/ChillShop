import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
// MaterialIcons
import Icon from "react-native-vector-icons/MaterialIcons";
import { CheckoutCard } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";

type Props = {};

interface ICheckoutProps {
  checkoutItems: any;
  removeItemFromCheckout: any;
  navigation: any;
  setCheckoutItems: any;
  setOrderItems: any;
  addOrderItem: any;
}

const Checkout: React.FC<ICheckoutProps> = ({
  checkoutItems,
  removeItemFromCheckout,
  navigation,
  setCheckoutItems,
  setOrderItems,
  addOrderItem,
}) => {
  return (
    <View style={styles.container}>
      {checkoutItems?.length === 0 ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <AntDesign name="shoppingcart" size={200} color={"#b0d5f7"} />
          <Text style={styles.headerText}> No products added yet!</Text>
          <Text style={styles.subText}>
            Go to product screen to add items for purchase
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            data={checkoutItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CheckoutCard
                item={item}
                setOrderItems={setOrderItems}
                removeItemFromCheckout={removeItemFromCheckout}
                checkoutItems={checkoutItems}
                addOrderItem={addOrderItem}
              />
            )}
          />
          {checkoutItems?.length === 0 ? (
            <></>
          ) : (
            <TouchableOpacity
              style={styles.placeOrderButton}
              disabled={checkoutItems?.length === 0}
              onPress={(item) => {
                // remove all items
                addOrderItem(item);
                setOrderItems([...checkoutItems]);
                setCheckoutItems([]);
                navigation.navigate("OrderSuccess");
              }}
            >
              <Text style={{ color: "#FFFFFF" }}>Place Order</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  placeOrderButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0D0D0E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D0D0E",
  },
  subText: {
    fontSize: 16,
    color: "#0D0D0E",
    fontWeight: "medium",
  },
});
