import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    Alert.alert("Você foi desconectado. \n Tchau tchau! ");
    this.props.navigation.replace("LoginScreen");
  }
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
