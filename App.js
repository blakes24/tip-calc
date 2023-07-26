import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Main from "./src/components/Main";
import colors from "./src/shared/colors";
import AppText from "./src/components/AppText";
import DismissKeyboard from "./src/components/DismissKeyboard";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Space Mono": require("./assets/fonts/SpaceMono-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <AppText style={styles.words}>SPLI</AppText>
            <AppText style={styles.words}>TTER</AppText>
          </View>
          <Main />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: colors.grayCyLight,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  words: {
    fontSize: 24,
    color: colors.darkCyan,
  },
});
