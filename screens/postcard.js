import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import firebase from "firebase";

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
      // story_id: this.props.story.key,
      // story_data: this.props.story.value,
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", (snapshot) => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };

  render() {
    //     let post = this.state.story_data;
    let images = {
      image_1: require("../assets/image_1.jpg"),
      image_2: require("../assets/image_2.jpg"),
      image_3: require("../assets/image_3.jpg"),
      image_4: require("../assets/image_4.jpg"),
      image_5: require("../assets/image_5.jpg"),
      image_6: require("../assets/image_6.jpg"),
      image_7: require("../assets/image_7.jpg"),
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.navigate("Post", {
            post: this.props.post,
            //   story_id: this.state.story_id,
          })
        }
      >
        <SafeAreaView style={styles.droidSafeArea} />
        <View
          style={
            this.state.light_theme
              ? styles.cardContainerLight
              : styles.cardContainer
          }
        >
          <Image source={images["image_1"]} style={styles.storyImage}></Image>
          <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
              <Text
                style={
                  this.state.light_theme
                    ? styles.storyTitleTextLight
                    : styles.storyTitleText
                }
              >
                {this.props.post.title}
              </Text>
              <Text
                style={
                  this.state.light_theme
                    ? styles.storyAuthorTextLight
                    : styles.storyAuthorText
                }
              >
                {this.props.post.caption}
              </Text>
            </View>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text
                style={
                  this.state.light_theme
                    ? styles.likeTextLight
                    : styles.likeText
                }
              >
                12k
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
  },
  cardContainerLight: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  titleTextContainer: {
    flex: 0.8,
  },
  iconContainer: {
    flex: 0.2,
  },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white",
  },
  storyTitleTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "black",
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
  },
  storyAuthorTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "black",
  },
  descriptionContainer: {
    marginTop: RFValue(5),
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "white",
  },
  descriptionTextLight: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(13),
    color: "black",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  likeTextLight: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
