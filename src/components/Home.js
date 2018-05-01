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

import { Image, SectionList, View } from "react-native";

import { SoundSectionList } from "../assets/SoundAssest";
import { connect } from "react-redux";
import { addSound } from "../actions";
import Player from "./Player";
import Video from "react-native-video";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  addSound() {
    this.props.addSound();
  }

  render() {
    var { navigate } = this.props.navigation;
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log("the new state of Home");
    console.log('------------------------------------');
    //this is how you retrieve the new state
    console.log(this.props.sound);
    console.log('------------------------------------');
    return (
      
      <Container>
      
        <Content>
          <SectionList
            renderItem={({ item, index, section }) => {
              return (
                <SectionListItem
                  section={section}
                  item={item}
                  index={index}
                  addSound={this.props.addSound}
                />
              );
            }}
            renderSectionHeader={({ section: { header } }) => {
              return <SectionHeader header={header} />;
            }}
            sections={SoundSectionList}
            keyExtractor={(item, index) => item.title}
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon type="FontAwesome" name="home" />
              <Text>Home</Text>
            </Button>
            <Button transparent onPress={() => navigate("Library")}>
              <Icon type="MaterialIcons" name="library-music" />
              <Text>library</Text>
            </Button>
            <Button transparent onPress={() => navigate("Search")}>
              <Icon type="FontAwesome" name="search" />
              <Text>Search</Text>
            </Button>
            <Button transparent onPress={() => navigate("Playing")}>
              <Icon type="FontAwesome" name="play" />
              <Text>Playing</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
class SectionListItem extends Component {
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
  }
  
  
  // source={SoundSectionList[1].data[0].url}
  render() {
    console.log("------------------------------------");
    console.log("songUrl is ");
    console.log(this.state.songUrl);
    console.log("------------------------------------");

    return (
      <ListItem>
        {this.state.songUrl && (
          <Video 
          source={this.state.songUrl} 
          paused={!this.state.playing}
          resizeMode="cover" />
        )}
        <Text key={this.props.index}>{this.props.item.title}</Text>
        <Button
          transparent
          onPress={this.playSound.bind(this, this.props.item.url)}
        >
        { !this.state.playing &&
          <Icon type="FontAwesome" name="play" />
        }
        { this.state.playing &&
          <Icon type="FontAwesome" name="pause" />
        }
        </Button>
       
      
       

        <Button
          transparent
          onPress={this.props.addSound.bind(this, this.props.item.title)}
        >
          <Icon type="Ionicons" name="md-add" />
        </Button>

        <Button transparent>
          <Icon type="Entypo" name="add-to-list" />
        </Button>
      </ListItem>
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <ListItem itemDivider>
        <Text>{this.props.header}</Text>
      </ListItem>
    );
  }
}

const mapStateToProps = ({ soundData }) => {
  const { sounds } = soundData;
  return { sounds };
};

const mapActionCreators = {
  addSound
};

export default connect(mapStateToProps, mapActionCreators)(Home);
