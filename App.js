import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './Components/Navigation';
import { Container } from 'native-base';



export default function App() {
  return (
    <Container>
    <AppContainer/>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
