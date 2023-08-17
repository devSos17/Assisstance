import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from "react-native";

const Table = () => {
  const [data, setData] = useState([
    {
      id: "1",
      nombre: "Evento 1",
      encargado: "Juan",
      fechaInicio: "2023-08-20",
      fechaFin: "2023-08-22",
      hora: "15:00",
      lugar: "Salón A",
    },
    // ...otros datos
  ]);

  const handleEdit = (id) => {
    // Lógica para editar un elemento
  };

  const handleDelete = (id) => {
    // Lógica para eliminar un elemento
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.encargado}</Text>
      <Text style={styles.cell}>{item.fechaInicio}</Text>
      <Text style={styles.cell}>{item.fechaFin}</Text>
      <Text style={styles.cell}>{item.hora}</Text>
      <Text style={styles.cell}>{item.lugar}</Text>
      <TouchableOpacity onPress={() => handleEdit(item.id)}>
        <Text style={styles.editButton}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButton}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Text style={styles.title}>Eventos</Text>
        <View style={styles.header}>
          <Text style={styles.headerCell}>Nombre</Text>
          <Text style={styles.headerCell}>Encargado</Text>
          <Text style={styles.headerCell}>Fecha Inicio</Text>
          <Text style={styles.headerCell}>Fecha Fin</Text>
          <Text style={styles.headerCell}>Hora</Text>
          <Text style={styles.headerCell}>Lugar</Text>
          <Text style={styles.headerCell}></Text>
          <Text style={styles.headerCell}></Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.tableContainer}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  editButton: {
    color: "blue",
    paddingHorizontal: 10,
  },
  deleteButton: {
    color: "red",
    paddingHorizontal: 10,
  },
});

export default Table;

