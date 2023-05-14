import { StyleSheet, Dimensions } from "react-native";

import Pdf from "react-native-pdf";

export default function MissionPage() {
  const source = require("../assets/PDFs/Mission.pdf");
  return <Pdf source={source} style={styles.pdf} />;
}
export const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});
