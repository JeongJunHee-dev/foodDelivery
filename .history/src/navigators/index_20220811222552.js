import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack' 
import { SplashScreen } from "../screens";

const Stack = createStackNavigator()

const Navigators = () => {
    return(
        <NavigationContainer>
            <Stack.Navigators>
                <Stack.Screen name="Splash" component={SplashScreen}/>
            </Stack.Navigators>
        </NavigationContainer>
    )
}