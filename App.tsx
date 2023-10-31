import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tasks } from "./screens";
import { useFonts } from "expo-font";
import {
  Inter_100Thin,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter100: Inter_100Thin,
    Inter: Inter_400Regular,
    Inter600: Inter_600SemiBold,
    Inter700: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (fontError) {
    console.error("Could not load fonts: ", fontError);
    return null;
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="tasks"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="tasks" component={Tasks} />
      </Navigator>
    </NavigationContainer>
  );
}
