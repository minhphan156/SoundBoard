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
import { Image } from "react-native";
import Video from "react-native-video";
import { Sounds } from "../assets/Sounds";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

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

  render() {
    var { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Video
            resizeMode="cover"
            ref="audio"
            source={Sounds.url}
            paused={!this.state.playing}
          />
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
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

              <Button transparent>
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
