// screens/HospitalListScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const hospitals = [
  {
    id: "1",
    name: "Green Life Hospital",
    services: ["Cardiology", "X-Ray", "Pathology"],
  },
  {
    id: "2",
    name: "Apollo Hospital",
    services: ["Dentistry", "MRI", "Neurology"],
  },
  {
    id: "3",
    name: "United Hospital",
    services: ["General Surgery", "Orthopedics", "ENT"],
  },
];

export default function HospitalListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("HospitalDetail", { hospital: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.services}>Services: {item.services.join(", ")}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Hospitals</Text>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 12,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  services: {
    marginTop: 4,
    color: "#555",
  },
});
