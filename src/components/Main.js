import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import colors from "../shared/colors";
import InputSection from "./InputSection";
import TipSection from "./TipSection";
import Results from "./Results";

export default function Main() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState("");

  const tip = +bill * (+tipPercent / 100);
  const total = +bill + tip;
  const tipPer = +people > 0 ? tip / +people : 0;
  const totalPer = +people > 0 ? total / +people : 0;

  console.log({ tip, total, tipPer, totalPer });

  return (
    <View style={styles.container}>
      <InputSection
        label="Bill"
        icon="dollar"
        value={bill}
        setValue={setBill}
      />
      <TipSection tipPercent={tipPercent} setTipPercent={setTipPercent} />
      <InputSection
        label="Number of People"
        icon="user"
        value={people}
        setValue={setPeople}
      />
      <Results tipPer={tipPer.toFixed(2)} totalPer={totalPer.toFixed(2)} />
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
