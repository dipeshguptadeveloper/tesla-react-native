import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import items from "../items";
const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon icon={item.icon} size={24} color="white" />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={24} color="gray" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  menuText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  subTitle: {
    color: "gray",
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
  },
});
