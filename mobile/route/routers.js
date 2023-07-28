import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import Home from "./pages/Home/home";

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Delete" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="trash-2" size={size} color={color} />
                    )
                }}
            />
            {/* <Nav.Screen name="Home" component={Home}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Login" component={Login}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Create" component={Create}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="plus-square" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Read" component={Read}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="list" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Update" component={Update}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="edit" size={size} color={color} />
                    )
                }}
            /> */}

        </Nav.Navigator>
    )
}

export default function Routers({ navigation }) {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home Lindomar' }}
                />
                {/* 
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ title: 'Login Lindomar' }}
                />
                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ title: 'Login Lindomar' }}
                /> */}


            </Pilha.Navigator>
        </NavigationContainer>
    )
}


// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import Login from "./pages/login/login";
// import Welcome from "./pages/Welcome/Welcome";
// import Register from "./pages/Register/Register";
// import RegisterSegTela from "./pages/Register/RegisterSec";
// import Opcao from "./pages/opcao/opcao";
// import Home from "./pages/Home/home";
// import InformationAboutYou from "./pages/informationAboutYou/informationAboutYou";
// import Editing from "./pages/editing/editing";
// import Loan from "./pages/Loan/Loan";
// import ConfirmTransaction from "./pages/ConfirmTransaction/ConfirmTransaction";
// import Unlock from "./pages/Unlock/Unlock";
// import Card from "./pages/Card/Card";
// import Address from "./pages/Address/address.js";
// import Value from "./components/Value/Value";
// import Transfer from "./pages/Transfer/Transfer";
// import Extract from "./pages/Extract/Extract";


// const Pilha = createStackNavigator()
// const Nav = createBottomTabNavigator()

// function NavBar() {
//     return (
//         <Nav.Navigator>
//             <Nav.Screen name="Register" component={Register} />
//         </Nav.Navigator>
//     )
// }

// function Routers() {
//     return (
//         <NavigationContainer>
//             <Pilha.Navigator>
//                 <Pilha.Screen
//                     name="NavBar"
//                     component={NavBar}
//                     options={{ title: false, headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Home'
//                     component={Home}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Login'
//                     component={Login}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Extract'
//                     component={Extract}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Transfer'
//                     component={Transfer}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Register'
//                     component={Register}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='ConfirmT'
//                     component={ConfirmTransaction}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name="Loan"
//                     component={Loan}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Value'
//                     component={Value}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Card'
//                     component={Card}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Address'
//                     component={Address}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Welcome'
//                     component={Welcome}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Desbloquear'
//                     component={Unlock}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Editing'
//                     component={Editing}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Information'
//                     component={InformationAboutYou}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Opcao'
//                     component={Opcao}
//                     options={{ headerShown: false }}
//                 />
//                 <Pilha.Screen
//                     name='Register2'
//                     component={RegisterSegTela}
//                     options={{ headerShown: false }}
//                 />

//             </Pilha.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Routers
