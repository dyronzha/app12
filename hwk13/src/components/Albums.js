import React, { Component } from 'react';
import { ScrollView,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager,
    Animated,
    Dimensions,
    PanResponder } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import albums from '../json/albums.json';
import Albumlist from './AlbumList';

// Make a component
class Albums extends Component {
constructor(props) {
        super(props);
        //const position = new Animated.ValueXY();
        //this.state = {position};
    }

  state = { albums: [] };
  componentWillMount() {
    this.setState({ albums });
   /* this.panResponder = PanResponder.create({
            //onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: (this.onShouldDrag),
            onPanResponderMove: (event, gesture) => {
                this.state.position.setValue({ x: gesture.dx });
            },
            onPanResponderRelease: this.onReleaseItem,
            onPanResponderTerminate: this.onReleaseItem,
        });*/
  }



  /*onShouldDrag = (event, gesture) => {
        const { dx } = gesture;
        return Math.abs(dx) > 2;
    }

  onReleaseItem = (event, gesture) => {
      let config = {
          toValue: { x: 0, y: 0 },
          duration: 500,
      };
      Animated.spring(
          this.state.position,
          config,
      ).start();
  }*/

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };
  

  render() {
    //const {position } = this.state;
    return (
      
      <ScrollView>
        <List>
       {this.state.albums.map((album) => (
            <Albumlist
              key = {album.title}
              //p_key = {album.title}
              p_avatar = { album.image}
              p_title = {album.title}
              p_subtitle = {album.artist}
              p_album = {album}
             p_gotopagetwo = {()=>this.goToPageTwo(album)}
            />
          ))}
          </List>
      </ScrollView>
    );
  }
}

export default Albums;


       /*   {this.state.albums.map((album) => (
            <albumlist
              key = {album.title}
              //p_key = {album.title}
              p_avatar = { album.image}
              p_title = {album.title}
              p_subtitle = {album.artist}
              p_album = {album}
             // p_gotopagetwo = {this.goToPageTwo(album)}
            />
          ))}*/