import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function TaskInput({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function addTaskHandler() {
    if (enteredTask.trim().length === 0) return;
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea..."
        value={enteredTask}
        onChangeText={setEnteredTask}
      />
      <Button title="+" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 11,
    flex: 1,
    marginRight: 8,
    borderRadius: 6,
  },
  
});
