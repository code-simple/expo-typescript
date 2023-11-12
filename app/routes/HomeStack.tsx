import { createStackNavigator } from "@react-navigation/stack";
import { Home, About } from "../screens";

export default function HomeStack() {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={Home}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
