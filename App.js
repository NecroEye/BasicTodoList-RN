import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import ItemList from "./ItemList";

export default class App extends Component {


  constructor() {
    super();
    this.state = {

      text: null,
      data: [],
      n: 0,

    };
  }


  handleSave = () => {

    const { text, data } = this.state;

    data.push({ text });
    this.setState({ data, text: "" });
  };

  render() {

    const { text, data } = this.state;

    return (

      <View>

        <View style={Styles.textArea}>
          <Text style={Styles.text}>To-Do List</Text>
        </View>

        <View style={{ padding: 10, flexDirection: "row" }}>
          <TextInput style={Styles.textInput}
                     value={text}
                     maxLength={16}
                     keyboardType={"default"} autoCorrect={false} placeholder={"type something"}
                     onChangeText={(event) => this.setState({ text: event })} />

          <TouchableOpacity style={Styles.customButton} onPress={this.handleSave}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>Add</Text>
          </TouchableOpacity>

        </View>

        <Text style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: 10 }}>{text}</Text>

        {
          data.map((item) => {
            return <ItemList item={item.text}/>
          })
        }

      </View>

    );


  }

}

const Styles = StyleSheet.create({

  main_menu: { flex: 1 },
  textArea: { backgroundColor: "blue", padding: 10, marginTop: 8.5 },
  text: {
    fontWeight: "575",
    fontSize: 21,
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  textInput: { borderStyle: "solid", borderWidth: 2, borderColor: "gray", borderRadius: 5.7, height: 40, flex: 1 },
  customButton: { padding: 9, borderRadius: 5, marginLeft: 7, backgroundColor: "red" },

});
