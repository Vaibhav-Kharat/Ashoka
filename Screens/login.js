import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable,Alert,TouchableOpacity,KeyboardAvoidingView
} from "react-native";
import styles from "../styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import { auth } from '../firebase';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring
} from "react-native-reanimated";

export default function Login({navigation}) {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [agree, setAgree] = useState (false); 


    const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        if(user.email === 'renuka@admin.com'){
          navigation.replace("AdminScreen");
        }else{
          navigation.replace("HomeScreen")
        }
      }
    })
    return unsubscribe
  }, [])
  

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })


  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        
        <Svg height={height + 100} width={width + 100}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('../assets/golden1.jpg')}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
          
        <Pressable onPress={() => (imagePosition.value = 1)}>
          <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
            <Text >X</Text>
          </Animated.View>
        </Pressable>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
         
          <Pressable style={styles.button} onPress={() => {imagePosition.value = 0;}}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            style={styles.textInput}
            onChangeText={newText =>setEmail(newText)}
            
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={newText =>setPassword(newText)}
          />
          <Pressable onPress={
              handleLogin
            }>
          
            <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
              <Text style={styles.buttonText}>
                LOG IN
              </Text>
            </Animated.View>
          </Pressable>
          
        </Animated.View>
      </View>
    </Animated.View>
  );
}
