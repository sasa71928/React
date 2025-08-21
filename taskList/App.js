import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(task) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: task },
    ]);
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <TaskItem text={itemData.item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
});
