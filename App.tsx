import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkout, ProductScreen } from "./Screens";
import OrderSuccessScreen from "./Screens/OrderSuccesful";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addItemToCheckout = (item) => {
    setCheckoutItems([...checkoutItems, item]);
  };

  const removeItemFromCheckout = (item) => {
    setCheckoutItems(checkoutItems.filter((i) => i !== item));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Products">
                {(props) => (
                  <ProductScreen
                    {...props}
                    addItemCheckout={addItemToCheckout}
                  />
                )}
              </Tab.Screen>
              <Tab.Screen name="Checkout">
                {(props) => (
                  <Checkout
                    {...props}
                    checkoutItems={checkoutItems}
                    removeItemFromCheckout={removeItemFromCheckout}
                    setCheckoutItems={setCheckoutItems}
                  />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
