import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./Header";
import { getSpacing } from "../utils/style";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export function Layout(props: LayoutProps) {
  const { title, children } = props;
  return (
    <View>
      <Header title={title} />
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSpacing(4),
  },
});
