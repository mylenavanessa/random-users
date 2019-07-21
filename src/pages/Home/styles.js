import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window") 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    aspectRatio: 1,
    width: width / 2,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  }
});

export default styles;