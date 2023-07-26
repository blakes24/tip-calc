import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../shared/colors";
import AppText from "./AppText";
import { FontAwesome } from "@expo/vector-icons";

export default function InputSection({ label, icon, value, setValue }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <View style={styles.inputContainer}>
        <FontAwesome name={icon} color={colors.grayCyDark} size={18} />
        <TextInput
          value={value}
          style={styles.input}
          placeholder="0"
          keyboardType="numeric"
          onChangeText={(value) => setValue(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    color: colors.grayCyDark,
  },
  input: {
    textAlign: "right",
    borderWidth: 0,
    color: colors.darkCyan,
    flexGrow: 1,
    fontSize: 24,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightBg,
    border: "none",
    marginVertical: 5,
    borderRadius: 3,
    padding: 10,
  },
});
