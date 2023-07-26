import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../shared/colors";

export default function Results() {
  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <View>
          <AppText style={styles.text}>Tip Amount</AppText>
          <AppText style={styles.smallText}>/ person</AppText>
        </View>
        <AppText style={styles.amount}>$0.00</AppText>
      </View>
      <View style={styles.amountContainer}>
        <View>
          <AppText style={styles.text}>Total</AppText>
          <AppText style={styles.smallText}>/ person</AppText>
        </View>
        <AppText style={styles.amount}>$0.00</AppText>
      </View>
      <TouchableOpacity style={styles.btn}>
        <AppText style={styles.btnText}>RESET</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.darkCyan,
    borderRadius: 10,
    padding: 25,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  smallText: {
    color: colors.grayCy,
    fontSize: 12,
  },
  amount: {
    color: colors.primary,
    fontSize: 24,
  },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: "100%",
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
    color: colors.darkCyan,
  },
});
