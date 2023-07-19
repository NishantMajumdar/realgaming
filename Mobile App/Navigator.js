import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
let hand="null";
const Stack = createNativeStackNavigator();


import {  StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState, useEffect, useRef } from 'react';

const reactn=require('react-native')





import { Accelerometer } from "expo-sensors";


var connected=0;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
     justifyContent: 'center',
        alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
    padding: 8,
    backgroundColor: '#2d2c2e',
    color: 'red',
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd',
   
  },
  main: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
     color: '#b9b7bd',
  },
 button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#414042',
    color: 'white',
    width: 120,
    
  },
   connect: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 25,
    backgroundColor: '#366944',
    color: 'white',
    
  },
   disconnect: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 25,
    backgroundColor: '#693b36',
    color: 'white',
    
  },  connect1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 25,
    backgroundColor: '#366944',
    color: 'white',
    position: 'absolute', top: "15%", left: "52%", zIndex: 1, 
    
    width: "45%",
    height: "34%"
  },
   disconnect1: {
    alignItems: 'center',
    justifyContent: 'center',
    
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 25,
    backgroundColor: '#693b36',
    color: 'white',
    position: 'absolute', top: "80%", left: "5%", zIndex: 1, 
    
    width: "30%",
    height: "10%"
      
    
  }, connect2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 25,
    backgroundColor: '#366944',
    color: 'white', position: 'absolute', top: "57%", left: "52%", zIndex: 1, 
    
    width: "45%",
    height: "34%"
    
  },
  
  textbox1:{
    color:'white',
    paddingHorizontal: 20,
    padding: 15,
    paddingTop: "20%",
    borderColor: '#48494a',
      borderWidth: 1,
      elevation: 10,
       position: 'absolute', top: "15%", left: "5%", zIndex: 1, 
    
    width: "40%",
    height: "34%"

  },textbox2:{
    color:'white',
    paddingHorizontal: 20,
    padding: 15,
    paddingTop: "20%",
    borderColor: '#48494a',
      borderWidth: 1,
      elevation: 10,
       position: 'absolute', top: "57%", left: "5%", zIndex: 1, 
    
    width: "40%",
    height: "34%"
      
  },textbox:{
    color:'white',
    paddingHorizontal: 20,
   
    borderColor: '#48494a',
      borderWidth: 1,
      elevation: 10,
     

  }
});
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
 
   
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
		<StatusBar style="dark"> </StatusBar>
   
      <Text style={styles.paragraph}>
        RealGaming Client
      </Text>
      
        <Text style={styles.main}>Choose Game</Text>
        <View style={{ flexDirection:"row" }}>
          <reactn.TouchableOpacity style={styles.button} onPress={() =>
            navigation.navigate('Game', { screen: 'Tennis' })
          }>
      <FontAwesome5 name="table-tennis" size={45} color="white" />
    </reactn.TouchableOpacity>
    <Text>   </Text>
   
    <reactn.TouchableOpacity style={styles.button} onPress={() =>
            navigation.navigate('Game', { screen: 'Boxing' })
          }>
            <MaterialCommunityIcons name="boxing-glove" size={54} color="white" />
         </reactn.TouchableOpacity>
        </View>
      
       
    
      
      
    </View>
  );
};
let jsCode = `
    console.log("connect")
`;
const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More Info</Text>
    </View>
  </SafeAreaView>
);













function BoxingScreen() {
   const webView = useRef(null);

  const sendMessageToWebView2 = () => {
    console.log(webView);
    if(hand==="left"){
    webView.current.injectJavaScript(`
      (function () {
        socket.emit("send", "h");
        
      })();
    `);}else{
      webView.current.injectJavaScript(`
      (function () {
        socket.emit("send", "j");
        
      })();
    `);
    }
  };
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const debounceInterval = 500;
  let lastShake = 0;

  useEffect(() => {
    let subscription = null;

    const onShake = () => {
     
      const now = Date.now();
      if (now - lastShake < debounceInterval) {
        return;
      }
      lastShake = now;
      
      setData({
        x: data.x + 1,
        y: data.y + 1,
        z: data.z + 1,
      });
      if(connected===1){
      
      sendMessageToWebView2();
      }
      
    };

    const enableSensor = async () => {
      Accelerometer.setUpdateInterval(100);
      subscription = Accelerometer.addListener(({ x, y, z }) => {
        const acceleration = Math.sqrt(x * x + y * y + z * z);
        const sensibility = 2.8;
        if (acceleration >= sensibility) {
          onShake(acceleration);
        }
      });
    };

    const disableSensor = () => {
      subscription && subscription.remove();
      subscription = null;
    };

    enableSensor();

    return () => {
      disableSensor();
    };
  }, [data]);

  const [value, onChangeText] = React.useState('http://192.168.1.9:3000');
const handleConnectPress = () => {
    setShowWebView(true);
    connected=1;
    hand="left";
  };const handleConnectPress2 = () => {
    setShowWebView(true);
    connected=1;
    hand="right";
  };
  const handleDisconnectPress = () => {
    setShowWebView(false);
    connected=0;
  };
  const [showWebView, setShowWebView] = useState(false);
  return (
      
     <View style={styles.container}>
      <View style={{ height: 20 }}>

      {showWebView && (
        <WebView
         ref={webView}
          originWhitelist={['*']}
          source={{ uri: value }}
         javaScriptEnabled={true}
        injectedJavaScript={jsCode}
          style={{ height: 2 }}
        ></WebView>
       
      )}</View>
       <View style={{ height: 20 }}>

     </View>
       <Text> {showWebView} </Text>
             {showWebView && (
         <reactn.TouchableOpacity style={styles.disconnect1} onPress={handleDisconnectPress}>
            <Text style = {styles.paragraph}>
               
               <AntDesign name="logout" size={24} color="white" />
            </Text>
         </reactn.TouchableOpacity>
       
      )}
      {!showWebView && (
         <>
      <Text style={{position: 'absolute',  top: "6%",  zIndex: 1,   fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Boxing
      </Text>
              <Text style={{position: 'absolute',  top: "11%",  zIndex: 1,   fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Left Hand
      </Text>
     
       
        
      <reactn.TextInput
        editable
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textbox1}
      />
     <Text>     </Text>
  <reactn.TouchableOpacity style={styles.connect1} onPress={handleConnectPress}>
          <Text style={styles.paragraph}>Connect</Text>
        </reactn.TouchableOpacity>
        
        
    <Text>   </Text>
   </>
  )}
     






      
  {!showWebView && (
         <>
       <Text style={{position: 'absolute',  top: "51.5%",  zIndex: 1,   fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Right Hand
      </Text>
      <reactn.TextInput
        editable
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textbox2}
      />
     <Text>     </Text>

        
         <reactn.TouchableOpacity style={styles.connect2} onPress={handleConnectPress2}>
          <Text style={styles.paragraph}>Connect</Text>
        </reactn.TouchableOpacity>
    <Text>   </Text>
 </>
  )}
    
      
    </View>
   
  );
  
  
}





function TennisNew() {
   const webView = useRef(null);

  const sendMessageToWebView2 = () => {
    console.log(webView);
    if(hand==="left"){
    webView.current.injectJavaScript(`
      (function () {
        socket.emit("send", "h");
        
      })();
    `);}else{
      webView.current.injectJavaScript(`
      (function () {
        socket.emit("send", "j");
        
      })();
    `);
    }
  };
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const debounceInterval = 500;
  let lastShake = 0;

  useEffect(() => {
    let subscription = null;

    const onShake = () => {
     
      const now = Date.now();
      if (now - lastShake < debounceInterval) {
        return;
      }
      lastShake = now;
      
      setData({
        x: data.x + 1,
        y: data.y + 1,
        z: data.z + 1,
      });
      if(connected===1){
      
      sendMessageToWebView2();
      }
      
    };

    const enableSensor = async () => {
      Accelerometer.setUpdateInterval(100);
      subscription = Accelerometer.addListener(({ x, y, z }) => {
        const acceleration = Math.sqrt(x * x + y * y + z * z);
        const sensibility = 2.8;
        if (acceleration >= sensibility) {
          onShake(acceleration);
        }
      });
    };

    const disableSensor = () => {
      subscription && subscription.remove();
      subscription = null;
    };

    enableSensor();

    return () => {
      disableSensor();
    };
  }, [data]);

  const [value, onChangeText] = React.useState('http://192.168.1.9:3000');
const handleConnectPress = () => {
    setShowWebView(true);
    connected=1;
    hand="left";
  };const handleConnectPress2 = () => {
    setShowWebView(true);
    connected=1;
    hand="right";
  };
  const handleDisconnectPress = () => {
    setShowWebView(false);
    connected=0;
  };
  const [showWebView, setShowWebView] = useState(false);
  return (
      
     <View style={styles.container}>
      <View style={{ height: 20 }}>

      {showWebView && (
        <WebView
         ref={webView}
          originWhitelist={['*']}
          source={{ uri: value }}
         javaScriptEnabled={true}
        injectedJavaScript={jsCode}
          style={{ height: 2 }}
        ></WebView>
       
      )}</View>
       <View style={{ height: 20 }}>

     </View>
       <Text> {showWebView} </Text>
             {showWebView && (
         <reactn.TouchableOpacity style={styles.disconnect1} onPress={handleDisconnectPress}>
            <Text style = {styles.paragraph}>
               
               <AntDesign name="logout" size={24} color="white" />
            </Text>
         </reactn.TouchableOpacity>
       
      )}
      {!showWebView && (
         <>
      <Text style={{position: 'absolute',  top: "6%",  zIndex: 1,   fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Tennis
      </Text>
              <Text style={{position: 'absolute',  top: "11%",  zIndex: 1,   fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Player 1
      </Text>
     
       
        
      <reactn.TextInput
        editable
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textbox1}
      />
     <Text>     </Text>
  <reactn.TouchableOpacity style={styles.connect1} onPress={handleConnectPress}>
          <Text style={styles.paragraph}>Connect</Text>
        </reactn.TouchableOpacity>
        
        
    <Text>   </Text>
   </>
  )}
     






      
  {!showWebView && (
         <>
       <Text style={{position: 'absolute',  top: "51.5%",  zIndex: 1,   fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b9b7bd', }}>
        Player 2
      </Text>
      <reactn.TextInput
        editable
        multiline
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textbox2}
      />
     <Text>     </Text>

        
         <reactn.TouchableOpacity style={styles.connect2} onPress={handleConnectPress2}>
          <Text style={styles.paragraph}>Connect</Text>
        </reactn.TouchableOpacity>
    <Text>   </Text>
 </>
  )}
    
      
    </View>
   
  );
  
  
}

















































const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Tennis" component={TennisNew} />
       <Stack.Screen name="Boxing" component={BoxingScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarInactiveTintColor: '#6a6b6a',
    tabBarActiveTintColor: '#ffffff',tabBarStyle: {
      height: 50,
      paddingHorizontal: 5,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#1d2121',
      position: 'absolute',
      borderTopWidth: 0,
      color: 'white',
      
      
  },}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size, focused }) => (
        
        <AntDesign name="home" size={24} color={focused ? "#ffffff" : "#6a6b6a"} />
      ),
    }} />
      <Tab.Screen
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Home');
          },
        })}
        name="Game"
        component={ProfileStackNavigator}
        options={{
      tabBarLabel: 'Game',
      tabBarIcon: ({ color, size, focused }) => (
        
        <MaterialCommunityIcons name="gamepad-variant-outline" size={24} color={focused ? "#ffffff" : "#6a6b6a"} />
      ),
    }} 
      />
    </Tab.Navigator>
  );
}
export { MyTabs };
