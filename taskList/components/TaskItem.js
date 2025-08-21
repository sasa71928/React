import { View, Text, StyleSheet } from "react-native";

export default function TaskItem({ text }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eeeeeeff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: "#000000ff",
  },
});
