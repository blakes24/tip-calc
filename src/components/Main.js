import { StyleSheet, Text, View } from "react-native";
import colors from "../shared/colors";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>HI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    alignItems: "center",
    justifyContent: "center",
    color: colors.grayCy,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
