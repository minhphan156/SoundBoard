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
import Video from 'react-native-video';
import { SoundSectionList } from "../assets/SoundAssest";
export default class Playing extends Component {
  static navigationOptions = {
    title: "Playing"
  };
  render() {
  
    return (
      <Container>
        <Content>
        <Video
      source={SoundSectionList[0].data[0].url}
      resizeMode="cover"
      />
          <Text>***** Under development *****</Text>
        </Content>
      </Container>
    );
  }
}

