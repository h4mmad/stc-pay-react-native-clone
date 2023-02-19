import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./components/TabBar";
import CardScreen from "./screens/CardScreen";
import AccountScreen from "./screens/AccountScreen";
import MyContacts from "./components/MyContacts";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ScreensWithTabNav() {
  return (
    <>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Accounts" component={AccountScreen} />
          <Tab.Screen name="Cards" component={CardScreen} />
          <Tab.Screen name="Stores" component={CardScreen} />
          <Tab.Screen name="More" component={CardScreen} />
        </Tab.Group>
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={ScreensWithTabNav}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Transfer to contact" component={MyContacts} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
