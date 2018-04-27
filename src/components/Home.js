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


class Home extends Component {
  //header screen
  static navigationOptions = {
    title: "Home"
  };

<<<<<<< HEAD
=======
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0
    };
  }

  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }


>>>>>>> ebbd44584ac8d762d45dbb0e15c713fa0880ebb4
  render() {
    var { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <SectionList
            renderItem={({ item, index, section }) => {
              return <SectionListItem item={item} index={index} />;
            }}
            renderSectionHeader={({ section: { header } }) => {
              return <SectionHeader header={header} />;
            }}
            sections={SoundSectionList}
            keyExtractor={(item, index) => item.title}
          />
<<<<<<< HEAD
=======
          <List>
            <ListItem itemDivider>
              <Text>Elana</Text>
            </ListItem>
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>D</Text>
            </ListItem>
            <ListItem>
              <Text>{Sounds.title}</Text>

              <Button transparent onPress={this.togglePlay.bind(this)}>
                <Icon type="FontAwesome" name="play" />
              </Button>

              <Button transparent onPress={this.props.addSound(Sounds.title)}>
                <Icon type="Ionicons" name="md-add" />
              </Button>

              <Button transparent>
                <Icon type="Entypo" name="add-to-list" />
              </Button>
            </ListItem>
            <ListItem itemDivider>
              <Text>E</Text>
            </ListItem>
            <ListItem>
              <Text>Earon Bennet</Text>
            </ListItem>
          </List>
>>>>>>> ebbd44584ac8d762d45dbb0e15c713fa0880ebb4
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
  render() {
    return (
      <ListItem>
        <Text key={this.props.index}>{this.props.item.title}</Text>
        <Button transparent>
          <Icon type="FontAwesome" name="play" />
        </Button>

        <Button transparent>
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
  const { sound } = soundData;
  return { sound };
};

const mapActionCreators = {
  addSound
};

export default connect(mapStateToProps, mapActionCreators)(Home);
