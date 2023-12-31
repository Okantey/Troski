import React, { useState, useEffect } from "react"
import "react-native-gesture-handler";
import "react-native-safe-area-context"
import * as Font from 'expo-font';
import MainNavigation from "./src/routes/MainNavigation";
import { View } from "react-native-web";


export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	const loadFonts = async () => {
		await Font.loadAsync({
			"Karla-Light": require("./assets/fonts/Karla-Light.ttf"),
			"Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
			"Karla-Medium": require("./assets/fonts/Karla-Medium.ttf"),
			"Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
			"Cabin-Medium": require("./assets/fonts/Cabin-Medium.ttf"),
			"Cabin-Bold": require("./assets/fonts/Cabin-Bold.ttf"),
			"Syne-Regular": require("./assets/fonts/Syne-Regular.ttf"),
			"Syne-Bold": require("./assets/fonts/Syne-Bold.ttf"),
			"Syne-ExtraBold": require("./assets/fonts/Syne-ExtraBold.ttf"),
		})
		setFontsLoaded(true)
	}

	useEffect(() => {
		loadFonts()
	}, [])
	return (
		fontsLoaded && (<MainNavigation />)
	);
}
