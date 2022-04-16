import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {useState} from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native-web';

export default function App(){
  const [likes, setLikes] = useState(1 - 1);
  function increment(){
    setLikes(likes + 1)
  }
  const [likes1, setLikes1] = useState(1 - 1);
  function increment1(){
    setLikes(likes1 + 1)
  }
  const [likes3, setLikes3] = useState(1 - 1);
  function increment3(){
    setLikes(likes3 + 1)
  }

  return(
    <>
      <View style = {{flex: 1}}>
        <View style = {styles.Header}>
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontWeight: '900', color: 'white', fontSize: 33}}>Account</Text>
          </View>
        </View>
        <View style = {styles.Body}>
          <ScrollView style = {{flex: 1, backgroundColor: 'lightgreen'}}>
            <View style = {styles.Item}>
              <View style = {{flex: 1}}>
              <TouchableOpacity><View style = {{flex: 5, alignItems: 'center'}}>
                <Image source={require('./assets/Avatar.jpg')} style = {styles.ItemImage} />
              </View></TouchableOpacity>
              <View style = {{flex: 1, flexDirection: 'row', marginTop: 33-13}}>
                <TouchableHighlight style = {{flex: 1}} onPress = {increment}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/home.png')} style = {styles.ItemReact} /></View>
                    <Text style = {{flex: 1, fontWeight: '600'}}>{likes}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/class.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/explore.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
              </View>
              </View>
              <View style = {{flex: .5}}></View>
            </View>
            <View style = {styles.Item}>
              <View style = {{flex: 1}}>
              <TouchableOpacity><View style = {{flex: 5, alignItems: 'center'}}>
                <Image source={require('./assets/Avatar.jpg')} style = {styles.ItemImage} />
              </View></TouchableOpacity>
              <View style = {{flex: 1, flexDirection: 'row', marginTop: 33-13}}>
                <TouchableHighlight style = {{flex: 1}} onPress = {increment1}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/home.png')} style = {styles.ItemReact} /></View>
                    <Text style = {{flex: 1, fontWeight: '600'}}>{likes1}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/class.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/explore.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
              </View>
              </View>
              <View style = {{flex: .5}}></View>
            </View>
            <View style = {styles.Item}>
              <View style = {{flex: 1}}>
              <TouchableOpacity><View style = {{flex: 5, alignItems: 'center'}}>
                <Image source={require('./assets/Avatar.jpg')} style = {styles.ItemImage} />
              </View></TouchableOpacity>
              <View style = {{flex: 1, flexDirection: 'row', marginTop: 33-13}}>
                <TouchableHighlight style = {{flex: 1}} onPress = {increment3}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/home.png')} style = {styles.ItemReact} /></View>
                    <Text style = {{flex: 1, fontWeight: '600'}}>{likes3}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/class.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{flex: 1}} onPress = {onclick}>
                  <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Image source={require('./assets/explore.png')} style = {styles.ItemReact} /></View>
                  </View>
                </TouchableOpacity>
              </View>
              </View>
              <View style = {{flex: .5}}></View>
            </View>
          </ScrollView>
        </View>
        <View style = {styles.Footer}>
          <View></View>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'darkblue',
    flex: .5,
  },
  Body: {
    flex: 3,
  },
  Footer: {
    backgroundColor: 'darkblue',
    bottom: 0,
    flex: .35,
  },
  Item: {
    flex: 1,
    flexDirection: 'row',
    height: 199,
    margin: 13-1,
    borderRadius: 31-11,
  },
  ItemImage: {
    height: 165,
    width: 311,
  },
  ItemReact: {
    height: 24,
    width: 24,
  },
})
/*<Image source={require('./assets/home.png')} style = {styles.ItemReact} />
<Image source={require('./assets/class.png')} style = {styles.ItemReact} />
<Image source={require('./assets/explore.png')} style = {styles.ItemReact} />*/