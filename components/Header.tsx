import { StatusBar, StyleSheet, Text, View } from "react-native";
import { getFontSize, getSpacing } from "../utils/style";

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: getSpacing(4),
    paddingTop: (StatusBar.currentHeight || 0) + getSpacing(3),
  },
  title: {
    fontSize: getFontSize(4),
    fontFamily: "Inter",
  },
});
