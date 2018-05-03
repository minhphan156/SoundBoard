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
import { connect } from "react-redux";
import Video from "react-native-video";
import update from 'immutability-helper';

//import soundList from '../assets/soundList';
class Library extends Component {
    static navigationOptions ={
        title: "Library",
      };
      
      constructor(props){
        super(props);
        this.state={
          soundList: []
        }
      }
      componentWillMount(){
console.log('------------------------------------');
console.log("componentDidMount library");
console.log('------------------------------------');    
this.addSoundToList();
  }
  componentWillUpdate(){
    console.log('------------------------------------');
    console.log("componentDidMount library");
    console.log('------------------------------------');    
    this.addSoundToList();
      }
  addSoundToList(){
    const newstate = update(this.state.soundList, {$push: [this.props.sounds]});
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log("newstate Library");
    console.log('------------------------------------');
    console.log(newstate);
    console.log('------------------------------------');
    // this.setState(prevState => ({
    //   soundList: 
    // }))
   this.setState({soundList: newstate})
  }
  render() {
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log("Library");
    console.log('------------------------------------');
    console.log(this.state.soundList);
    console.log('------------------------------------');
    return (
      
      <Container>
      
      <Video
      source={this.props.sounds.url}
      resizeMode="cover"
    />
        <Content>
        <Text>Library</Text>
        <Text>{this.props.sounds.title}</Text>
       
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ soundData }) => {
  const { sounds } = soundData;
  return { sounds };
};

export default connect(mapStateToProps, null)(Library);
