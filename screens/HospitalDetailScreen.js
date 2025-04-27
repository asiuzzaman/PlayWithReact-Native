// screens/HospitalDetailScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HospitalDetailScreen({ route, navigation }) {
  const { hospital } = route.params;

  const handleSelectService = (service) => {
    navigation.navigate("Appointment", {
      hospitalName: hospital.name,
      serviceName: service,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hospital.name}</Text>
      <Text style={styles.subtitle}>Available Services</Text>
      <FlatList
        data={hospital.services}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => handleSelectService(item)}
          >
            <Text style={styles.serviceText}>{item}</Text>
          </TouchableOpacity>
        )}
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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 12,
  },
  serviceButton: {
    padding: 16,
    backgroundColor: "#e0f7fa",
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    color: "#00796b",
  },
});
