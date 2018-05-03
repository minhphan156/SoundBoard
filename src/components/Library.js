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
import { SectionList,FlatList, View } from "react-native";

import { connect } from "react-redux";
import Video from "react-native-video";
import update from 'immutability-helper';
class Library extends Component {
    static navigationOptions ={
        title: "Library",
      };
   
  
  render() {
    return (
      
      <Container>

     { this.props.sounds.url &&
      <Video
      source={this.props.sounds.url}
      resizeMode="cover"
    />
     }
        <Content>
        <FlatList
        data={this.props.sounds}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => item.title}
      />
      
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ soundData }) => {
  const  sounds  = soundData;
  return  {sounds} ;
};

export default connect(mapStateToProps, null)(Library);
