import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";
import colors from "../shared/colors";
import TipButton from "./TipButton";

export default function TipSection() {
  return (
    <View style={styles.container}>
      <AppText style={styles.label}>Select Tip %</AppText>
      <View style={styles.btnRow}>
        <TipButton style={styles.btn} percent={5} />
        <TipButton style={styles.btn} percent={10} />
      </View>
      <View style={styles.btnRow}>
        <TipButton style={styles.btn} percent={15} />
        <TipButton style={styles.btn} percent={25} />
      </View>
      <View style={styles.btnRow}>
        <TipButton style={styles.btn} percent={50} />
        <TextInput
          style={[styles.input]}
          placeholder="Custom"
          keyboardType="numeric"
          // onChangeText={(text) => setInput(text)}
          // onEndEditing={handleEndEditing}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
  },
  label: {
    color: colors.grayCyDark,
    marginBottom: 10,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    marginVertical: 8,
    borderWidth: 0,
    padding: 10,
    width: "48%",
  },
  input: {
    width: "48%",
    textAlign: "right",
    borderWidth: 0,
    color: colors.darkCyan,
    fontSize: 24,
    fontWeight: "700",
    backgroundColor: colors.lightBg,
    marginVertical: 8,
    borderRadius: 8,
    padding: 10,
  },
});
