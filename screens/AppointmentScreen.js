// screens/AppointmentScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function AppointmentScreen({ route }) {
  const { hospitalName, serviceName } = route.params;
  const [patientName, setPatientName] = useState("");
  const [note, setNote] = useState("");

  const handleBook = () => {
    if (!patientName) {
      Alert.alert("Validation Error", "Please enter your name");
      return;
    }

    Alert.alert(
      "Appointment Confirmed",
      `Appointment booked at ${hospitalName} for ${serviceName}.\n\nPatient: ${patientName}${
        note ? `\nNote: ${note}` : ""
      }`
    );

    // Here you could store the booking in a database
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Appointment</Text>
      <Text style={styles.label}>Hospital: {hospitalName}</Text>
      <Text style={styles.label}>Service: {serviceName}</Text>

      <TextInput
        placeholder="Your Name"
        value={patientName}
        onChangeText={setPatientName}
        style={styles.input}
      />
      <TextInput
        placeholder="Additional Note (optional)"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <Button title="Book Appointment" onPress={handleBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff", // Ensure this is defined correctly
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
