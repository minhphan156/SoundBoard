import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  CardItem,
  ListItem,
  List,
  Text
} from "native-base";
import Video from "react-native-video";
import DD from "../assets/With You.mp3";
export default class Playing extends Component {
  static navigationOptions = {
    title: "Playing"
  };
  
  render() {
  
    return (
      <Container>
        <Content>
        <Video source={{uri: 'file:///Users/Minh/WorkSpace/ReactNative/SoundBoard/src/assets/A Whole New World.mp3'}} resizeMode="cover" />
        

          <Text>***** Under development *****</Text>
        </Content>
      </Container>
    );
  }
}
