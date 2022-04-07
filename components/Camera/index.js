import React, { useState, useEffect, useRef } from 'react';
import { Image, Modal, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import styles from '../style';


export default function ElementoExtra(props) {

    const ref = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type] = useState(Camera.Constants.Type.back);
    const [captured, setCaptured] = useState(null);
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function take(){
        if(ref){
          const opt={
            quality: 0.5,
            base64: true,
            fixOperation: true,
            forceUpOrientation: true,
      
          }

          const data = await ref.current.takePictureAsync(opt);
          setCaptured(data.uri);
          setOpen(true);
          console.log(data)
          await MediaLibrary.saveToLibraryAsync(data.uri)
      
        }

        async function salvarLoc() {
    
          let actualLocation = await Location.getCurrentPositionAsync({});
          setLocation(actualLocation.coords);
          
          if (errorMsg) {
            text = errorMsg;
          } else if (location) {
            text = JSON.stringify(location);
          }
        }
      

        salvarLoc();
          const data =  await ref.current.takePictureAsync(opt);
          setCaptured(data.uri);
          setOpen(true);
          await MediaLibrary.saveToLibraryAsync(data.uri);
          console.log('Localização atual: ', location)
          console.log('Foto: ', data.uri)
          if (props.matricula != null && props.codigo != null && props.situacao != null) {
            console.log(`Informações: ${props.matricula}_${props.codigo}_${props.situacao}`) 
        }

        
      }

      return (
        <SafeAreaView style={styles.container}>
          <Camera style={styles.camera} 
          type={type}
          ref ={ref}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonFlip}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                      
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonTake}
              onPress={take}>
                   <Image source={require("/Users/Trust/Documents/appLeiturista/assets/camera.png")}/>
                <Text style={styles.text}> Take </Text>
              </TouchableOpacity> 
            </View>
          </Camera>
          <Modal transparent={true} visible={open} >
            <View style={styles.contentPhoto}>
              <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonClose} onPress={()=> setOpen(false)}> 
                  <Text style={styles.text}> Close </Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.img} source={{uri:captured}} />
            </View>
          </Modal>
        </SafeAreaView>
      );
};