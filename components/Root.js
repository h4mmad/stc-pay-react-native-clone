import { createStackNavigator } from "@react-navigation/stack";
import MyContacts from "./MyContacts";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transfer to contact" component={MyContacts} />
    </Stack.Navigator>
  );
}
