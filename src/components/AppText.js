import { Text } from "react-native";

export default function AppText({ children, style }) {
  return (
    <Text style={{ fontFamily: "Space Mono", fontWeight: "700", ...style }}>
      {children}
    </Text>
  );
}
