import { StyleSheet, Text, View } from "react-native";
import colors from "../shared/colors";
import InputSection from "./InputSection";
import TipSection from "./TipSection";

export default function Main() {
  return (
    <View style={styles.container}>
      <InputSection label="Bill" icon="dollar" />
      <TipSection />
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
