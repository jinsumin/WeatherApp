import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { requestForegroundPermissionsAsync } from "expo-location";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  const [street, setStreet] = useState("Loading...");
  const [permission, setPermission] = useState(null);
  const API_KEY = "3147f9620506be85308c74c392720d7b";
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setPermission(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: 5,
    });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setStreet(location[0].street);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alert&appid=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>{street}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.weather}
      >
        <View style={style.day}>
          <Text style={style.temperature}>15</Text>
          <Text style={style.description}>Rainy</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temperature}>15</Text>
          <Text style={style.description}>Rainy</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temperature}>15</Text>
          <Text style={style.description}>Rainy</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temperature}>15</Text>
          <Text style={style.description}>Rainy</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {
    backgroundColor: "gray",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temperature: {
    fontSize: 158,
    marginTop: 50,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
