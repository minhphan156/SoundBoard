import React,{Component} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

export default class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
          playing: true,
          muted: false,
          shuffle: false,
          sliding: false,
          currentTime: 0,
          source:"",
        };
      }
      togglePlay(){
        this.setState({ playing: !this.state.playing });
      }
      render(){
          return(
            <Video source={this.state.source}
            ref="audio"
            muted={false}
            paused={!this.state.playing}
            resizeMode="cover"
            />
          );
      }
} 