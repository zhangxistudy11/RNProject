/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  ScrollView, 
  SectionList,
  Image,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      /*
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
      */
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ffffffReact Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
      */
     /*
     <View>
     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
     <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
     <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
   </View>
   */
  /*
  <View style={{flex: 1}}>
  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
*/
/*
<View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1,backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      */
     /*
     <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
    */
   /*
   <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }}>
    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  </View>
  */
 /*
 <View style={{padding: 10}}>
 <TextInput
   style={{height: 40}}
   placeholder="Type here to translate!"
   onChangeText={(text) => this.setState({text})}
 />
 <Text style={{padding: 10, fontSize: 42}}>
   {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
 </Text>
</View>
*/
/*
<ScrollView>
<Text style={{fontSize:14}}>Scroll me plz</Text>
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Text style={{fontSize:14}}>If you like</Text>
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Text style={{fontSize:14}}>Scrolling down</Text>
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Text style={{fontSize:10}}>What's the best</Text>
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Text style={{fontSize:11}}>Framework around?</Text>
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Image source={pic} style={{width: 193, height: 110}} />
<Text style={{fontSize:11}}>React Native</Text>
</ScrollView>
*/
/*
<View style={styles.container}>
<FlatList
  data={[
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
/>
</View>
*/
<View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
/*
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
*/
/*
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
*/
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 
});
 */