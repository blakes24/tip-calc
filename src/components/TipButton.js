import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../shared/colors";

export default function TipButton({ percent, style, active }) {
  return (
    <TouchableOpacity style={[styles.btn, style]}>
      <AppText style={styles.text}>{percent + "%"}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.darkCyan,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
