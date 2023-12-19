import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  text: {
    fontSize: 40,
    color: '#762FD3',
    fontFamily: 'silkscreenregular',
  },
  text2: {
    fontSize: 40,
    color: '#E2DBB8',
    fontFamily: 'silkscreenregular',
  },
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '50%',
    backgroundColor: '#E2DBB8',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  view2: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#762FD3',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  gradient: {
    flex: 1,
  },
});

export default style;
