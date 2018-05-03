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
import { SectionList, FlatList, View } from "react-native";

import { connect } from "react-redux";
import Video from "react-native-video";

class Library extends Component {
  static navigationOptions = {
    title: "Library"
  };
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0,
      songUrl: null
    };
  }
  playSound(urlPassed) {
    
    this.setState({
      songUrl: urlPassed,
      playing: !this.state.playing
    });
    console.log('------------------------------------');
    console.log("playSound");
    console.log(urlPassed)
    console.log(this.state.songUrl)
    console.log('------------------------------------');
  }

  render() {
  
    return (
      <Container>
        <Content>
        <Text>Library</Text>
          <FlatList
            data={this.props.sounds}
            renderItem={({ item,index}) => 

            <ListItem>
            {this.state.songUrl && (
              <Video
                source={this.state.songUrl}
                paused={!this.state.playing}
                resizeMode="cover"
              />
            )}
            <Text key={index}>{item.title}</Text>
            <Button
              transparent
              onPress={this.playSound.bind(this, item.url)}
            >
              {!this.state.playing && <Icon type="FontAwesome" name="play" />}
              {this.state.playing && <Icon type="FontAwesome" name="pause" />}
            </Button>
          </ListItem>
            
            }
            keyExtractor={(item, index) => item.title}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ soundData }) => {
  const sounds = soundData;
  return { sounds };
};

export default connect(mapStateToProps, null)(Library);
