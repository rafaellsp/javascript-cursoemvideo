function HomeScreen({ Navigation, route}) {
	const [valor1, setValor1] = React.useState(0);
	const [valor2, setValor2] = React.useState(0);
	React.useEffect(
		() => Navigation.addListener('focus' , () =>
		setValor1(0)
		), [navigation]
	);
	React.useEffect(() => setValor2(0),[valor2]);
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<Text>Home Screen</Text>
		<Button title="Open drawer" onPress={() => navigation.openDrawer()} />
		<TextInput style={StyleSheet.textInput}
		onChangeText={(valor) => setValor2(valor)}
		value={valor2}
		/>
		<TextInput
		style={StyleSheet.textInput}
		onChangeText={(valor) => setValor2(valor)}
		value={valor2}
		/>
		<Button 
		ttle="Somar"
		onPress={() => navigation.navigate('DetailSomar', { valor1, valor2 })}
		/>
		<Text style={{ margin: 10 }}>Resultado da Soma: {route.params?.post}</Text>
		</View>
	);
}
