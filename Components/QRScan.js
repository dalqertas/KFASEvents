import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import instance from "./Stores/instance";
import authStore from "./Stores/authStore";

const QRScan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const getData = async (attendee_id) => {
    console.log(attendee_id);
    try {
      let res = await instance.put(`event/attendees/checkin/${attendee_id}`);
      alert(`Checked in!\nData: ${res.data}`);
    } catch (error) {
      console.log(error);
      alert(`Could not check in.\nError: ${error}`);
    }
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    // Linking.openURL(data);
    getData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QRScan;