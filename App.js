import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>Seoul</Text>
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
