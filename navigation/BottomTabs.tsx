import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkout, ProductScreen } from "../Screens";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Product",
          lazy: true,
          tabBarIcon: ({ color, size }) => (
            <Icon name="shop" size={30} color="#0D0D0E" />
          ),
        }}
        name="Product"
        component={ProductScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Checkout",
          lazy: true,
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="shopping-cart-checkout" size={30} color="#0D0D0E" />
          ),
        }}
        name="Checkout"
        component={Checkout}
      />
    </Tab.Navigator>
  );
}
