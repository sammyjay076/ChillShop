import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Checkout, ProductScreen } from "../Screens";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Checkout" component={Checkout} />
    </Tab.Navigator>
  );
}
