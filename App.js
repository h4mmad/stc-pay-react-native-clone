import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./components/TabBar";
import CardScreen from "./screens/CardScreen";
import AccountScreen from "./screens/AccountScreen";
import MyContacts from "./components/MyContacts";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Accounts"
          component={AccountScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cards"
          component={CardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Stores"
          component={CardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="More"
          component={MyContacts}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
