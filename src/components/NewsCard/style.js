import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
  }, //haberleri sayfanın 4 üne bölerek yerleştirdi
  title: {
    fontSize:17,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
marginTop: 3,
  },
  inner_container :{
padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color: 'darkdimgrey',
    fontWeight: 'bold',
    fontSize:17,
  },
});
