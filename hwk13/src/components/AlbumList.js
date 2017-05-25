import React, { Component } from 'react';
import { ScrollView,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager,
    Animated,
    Dimensions,
    PanResponder } from 'react-native';
import { List, ListItem } from 'react-native-elements';



// Make a component
class Albumlist extends Component {
constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        this.state = {position};
    }


  componentWillMount() {
    this.panResponder = PanResponder.create({
            //onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: (this.onShouldDrag),
            onPanResponderMove: (event, gesture) => {
                this.state.position.setValue({ x: gesture.dx });
            },
            onPanResponderRelease: this.onReleaseItem,
            onPanResponderTerminate: this.onReleaseItem,
        });
  }

  onShouldDrag = (event, gesture) => {
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
  }


  /*goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };*/

  render() {
    const {position } = this.state;
    const {p_key, p_avatar, p_title, p_subtitle, p_album,p_gotopagetwo} = this.props;
    return (
            <Animated.View
                style={position.getLayout()}
                {...this.panResponder.panHandlers}
            >
           
            <ListItem
              //key={p_key}
              roundAvatar
              avatar={{ uri: p_avatar }}
              title={p_title}
              subtitle={p_subtitle}
              onPress={p_gotopagetwo}
              // hideChevron
              // rightTitle='More...'
            />
           
            </Animated.View>
    );
  }
}

export default Albumlist;
