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
