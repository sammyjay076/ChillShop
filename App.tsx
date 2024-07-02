import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkout, ProductScreen } from "./Screens";
import OrderSuccessScreen from "./Screens/OrderSuccesful";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addItemToCheckout = (item) => {
    setCheckoutItems([...checkoutItems, item]);
  };

  const [orderItems, setOrderItems] = useState([]);

  const addOrderItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const removeItemFromCheckout = (item) => {
    setCheckoutItems(checkoutItems.filter((i) => i !== item));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator>
              <Tab.Screen
                options={{
                  tabBarLabel: "Product",
                  lazy: true,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="shop" size={30} color="#0D0D0E" />
                  ),
                }}
                name="Products"
              >
                {(props) => (
                  <ProductScreen
                    {...props}
                    addItemCheckout={addItemToCheckout}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen
                options={{
                  tabBarLabel: "Checkout",
                  lazy: true,
                  tabBarIcon: ({ color, size }) => (
                    <Icon2
                      name="shopping-cart-checkout"
                      size={30}
                      color="#0D0D0E"
                    />
                  ),
                }}
                name="Checkout"
              >
                {(props) => (
                  <Checkout
                    {...props}
                    checkoutItems={checkoutItems}
                    removeItemFromCheckout={removeItemFromCheckout}
                    setCheckoutItems={setCheckoutItems}
                    setOrderItems={setOrderItems}
                    addOrderItem={addOrderItem}
                  />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="OrderSuccess">
          {(props) => {
            return (
              <OrderSuccessScreen
                setOrderItems={setOrderItems}
                successOrderItems={orderItems}
                {...props}
              />
            );
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
