import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {SafeAreaView, Text} from 'react-native';

const TimeOfDay = () => {
  const [timeOfDay, setTimeOfDay] = useState('evening');
  const [clock, setClock] = useState('00:00');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setTimeOfDay('morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay('afternoon');
    } else if (currentHour >= 18 && currentHour < 23) {
      setTimeOfDay('evening');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  useEffect(() => {
    const h = new Date().getHours() + 1;
    const m = new Date().getMinutes();
    setClock(`${h}:${m}`);
  }, []);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <LinearGradient
        style={[style.view, style.gradient]}
        colors={['#762FD3', '#E2DBB8']}
        start={{x: -0.3, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={style.text}>Good {timeOfDay}!</Text>
      </LinearGradient>
      <LinearGradient
        style={[style.view2, style.gradient]}
        colors={['#762FD3', '#E2DBB8']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={style.text2}>It's {clock}!</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default TimeOfDay;
