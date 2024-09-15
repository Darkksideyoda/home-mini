import LottieView from 'lottie-react-native';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

import { capitalizeFirstLetter } from '@/utilities/helpers';

import { useGetWeather } from './queries';

function WeatherCard() {
  const { data: weather, isSuccess } = useGetWeather();

  console.log({
    isSuccess
  });

  return (
    <View className="bg-sky-500 border border-gray-300 flex py-2 flex-row w-full items-center justify-between pl-4 rounded-3xl">
      {isSuccess ? (
        <>
          <View className="flex flex-col items-center gap-2 h-full p-4">
            <Text
              style={{
                fontFamily: Platform.select({
                  android: 'Inter_900Black',
                  ios: 'Inter-Black',
                  web: 'Inter_900Black'
                }),
                fontSize: 30,
                color: 'white'
              }}
            >
              {weather.main.feels_like}°
            </Text>
            <Text
              style={{
                fontFamily: Platform.select({
                  android: 'Inter_600SemiBold',
                  ios: 'Inter-Black',
                  web: 'Inter_600SemiBold'
                }),
                fontSize: 14,
                color: 'white'
              }}
            >
              {weather.name}
            </Text>
          </View>
          <View className="flex flex-col items-center gap-2 h-full mb-4 mr-4">
            <LottieView
              style={{ padding: 60, bottom: 50, left: 40 }}
              source={require('../assets/lotties/clearSky.json')}
              autoPlay
              loop
            />
            <Text
              style={{
                fontFamily: Platform.select({
                  android: 'Inter_600SemiBold',
                  ios: 'Inter-Black',
                  web: 'Inter_600SemiBold'
                }),
                fontSize: 18,
                color: 'white'
              }}
            >
              {capitalizeFirstLetter(weather.weather[0].description)}
            </Text>
          </View>
        </>
      ) : (
        <Progress.Bar color="green" indeterminate={!isSuccess} style={{ borderWidth: 0, width: '100%' }} />
      )}
    </View>
  );
}

export default WeatherCard;
