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
<<<<<<< HEAD
//import {SoundSectionList} from './SoundAssest';
import { SoundSectionList } from "../assets/SoundAssest";

// import DEAMN from "./DEAMN.mp3";
// import AllIAsk from "./All I Ask.mp3";
// import WithYou from "./With you.mp3";
// import AWholeNewWorld from "./A Whole New World.mp3";

 

=======
import { SoundSectionList } from "../assets/SoundAssest";
>>>>>>> playPauseFeature
export default class Playing extends Component {
  static navigationOptions = {
    title: "Playing"
  };
  render() {
<<<<<<< HEAD
  //   let k =
  //     {
  //       title: "DEAMN",
  //       url: require("./DEAMN.mp3")
  //     }
  //   ;
  //  const SoundSectionList = [
  //   {
  //     header: "A",
  //     data: [
  //       {
  //         title: "All I ask",
  //         url: AllIAsk
  //       },
  //       {
  //         title: "A whole new world",
  //         url: AWholeNewWorld
  //       }
  //     ]
  //   },
  //   {
  //     header: "D",
  //     data: [
  //       {
  //         title: "DEAMN",
  //         url: require("./DEAMN.mp3")
  //       }
  //     ]
  //   },
  //   {
  //     header: "W",
  //     data: [
  //       {
  //         title: "With You",
  //         url: WithYou
  //       }
  //     ]
  //   }
  // ];
    console.log('------------------------------------');
    console.log("playing screen");
    console.log(SoundSectionList[1].data[0].url);
    console.log('------------------------------------');
=======
  
>>>>>>> playPauseFeature
    return (
      <Container>
        <Content>
        <Video
<<<<<<< HEAD
      source={SoundSectionList[1].data[0].url}
=======
      source={SoundSectionList[0].data[0].url}
>>>>>>> playPauseFeature
      resizeMode="cover"
      />
          <Text>***** Under development *****</Text>
        </Content>
      </Container>
    );
  }
}

