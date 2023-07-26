import { StyleSheet, Text, View } from "react-native";
import colors from "../shared/colors";
import InputSection from "./InputSection";
import TipSection from "./TipSection";
import Results from "./Results";

export default function Main() {
  return (
    <View style={styles.container}>
      <InputSection label="Bill" icon="dollar" />
      <TipSection />
      <InputSection label="Number of People" icon="user" />
      <Results />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
});
