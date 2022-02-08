function HomeScreen({ navigation }) {
	return (
		<View style={{flex: 1, alignItems:'center', justifyContent: 'Center' }}>
		<Text>Home Screen</Text>
		<Button 
		title= "Va para Tela A"
		onPress={() => 
		navigation.navigate('MyStack', {
		params: { user: 'jane'},
		})
		
		}
	
	
	
	/>
	</View>
	);
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Mystack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="TelaB" component={ProfileScreen} />
			<Stack.Screen name="TelaA" component={ProfileScreen} />	
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="MyStack" component={MyStack} />	
			</Drawer.Navigator>
		</NavigationContainer>
	);
}