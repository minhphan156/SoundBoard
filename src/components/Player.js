// import React,{Component} from 'react';
// import {View} from 'react-native';
// import Video from 'react-native-video';

// export default class Player extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           playing: true,
//           muted: false,
//           shuffle: false,
//           sliding: false,
//           currentTime: 0,
//           songIndex: props.songIndex
//         };
//       }
     
//       render(){
        
//         let songPlaying = this.props.songs[this.state.songIndex];

//           return(
              
//             <Video source={}
//             ref="audio"
//             volume={ this.state.muted ? 0 : 1.0}
//             muted={false}
//             paused={!this.state.playing}
//             resizeMode="cover"
//             repeat={false}/>
              
           
//           );
//       }
// } 