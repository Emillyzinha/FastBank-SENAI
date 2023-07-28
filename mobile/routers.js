import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

import Home from "./pages/Home/home";
import Welcome from "./pages/Welcome/Welcome";
import Register from "./pages/Register/Register";
import RegisterSegTela from "./pages/Register/RegisterSec";
import Login from "./pages/login/login";
import InformationAboutYou from "./pages/informationAboutYou/informationAboutYou";
import Editing from "./pages/editing/editing";
import Transfer from "./pages/Transfer/Transfer";
import Value from "./components/Value/Value";
import Card from "./pages/Card/Card";
import Loan from "./pages/Loan/Loan";
import Address from "./pages/Address/address.js";
import Extract from "./pages/Extract/Extract";

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    // backgroundColor: '#000',
                    // borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#EDAA25',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Extract" component={Extract}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="credit-card" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Information" component={InformationAboutYou}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

            {/* screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Extract') {
            iconName = 'credit-card';
          } else if (route.name === 'Information') {
            iconName = 'user';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#EDAA25',
        inactiveTintColor: '#555',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Extract" component={Extract} />
      <Tab.Screen name="Information" component={InformationAboutYou} /> */}
        </Nav.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                {/* <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false, tabBarIcon: ({ size, color }) => (
                            <Feather name="Home" size={size} color={color} />
                            )
                        }}
                    /> */}
                <Pilha.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Register'
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Register2'
                    component={RegisterSegTela}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Editing'
                    component={Editing}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Transfer'
                    component={Transfer}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Value'
                    component={Value}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Card'
                    component={Card}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Loan"
                    component={Loan}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name='Address'
                    component={Address}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
