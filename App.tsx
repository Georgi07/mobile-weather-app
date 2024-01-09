/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  Text,
} from 'react-native';
import axios from 'axios';
import {API_PROPS} from './constrants/constants';
import {styles} from './styles/styles';

function App(): React.JSX.Element {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState();

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setLocation('');
    axios
      .get(
        `${API_PROPS.BASE}weather?q=${location}&units=metric&appid=${API_PROPS.KEY}`,
      )
      .then(res => {
        setWeatherDetails(res.data);
      })
      .catch(err => console.dir(err))
      .finally(() => setLoading(false));
  }, [location]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('./assets/backgroundHot.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <TextInput
            placeholder="Enter city name"
            onChangeText={text => setLocation(text)}
            value={location}
            placeholderTextColor={'#000'}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={'large'} color="#000" />
          </View>
        )}
        {weatherDetails && (
          <View style={styles.infoView}>
            <Text style={styles.location}>{`${weatherDetails?.name}, ${weatherDetails?.sys?.country}`}</Text>
            <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
            <Text style={styles.temperature}>{`${Math.round(weatherDetails?.main?.temp)} °C`}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

export default App;
