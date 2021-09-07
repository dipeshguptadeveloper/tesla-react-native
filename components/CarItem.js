import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faFan,
  faKey,
  faLock,
  faToolbox,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const CarItem = () => {
  const [locked, setLocked] = useState(false);

  const clickLock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Model 3</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* battery */}
      <View style={styles.batterySection}>
        <Image
          source={require("../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150mi</Text>
      </View>

      {/* status */}

      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* controls */}
      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faFan} size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faKey} size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                icon={locked ? faLock : faUnlock}
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  batteryImage: {
    width: 70,
    height: 26,
    marginRight: 12,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});
