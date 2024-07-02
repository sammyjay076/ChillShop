import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CheckoutCard, OrderCard } from "../../components";

interface IOrderSuccessScreenProps {
  successOrderItems: any;
  setOrderItems: any;
}
const OrderSuccessScreen: React.FC<IOrderSuccessScreenProps> = ({
  successOrderItems,
  setOrderItems,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <Text style={styles.text}>
          Order placed successfully for the following products
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={successOrderItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OrderSuccessScreen;
