import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSuccessScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Successful!</Text>
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
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default OrderSuccessScreen;
