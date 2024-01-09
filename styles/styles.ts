import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#df8e00',
    borderRadius: 10,
    fontSize: 19,
  },
  infoView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  location: {
    fontSize: 40,
    color: '#fff',
  },
  date: {
    fontSize: 28,
    color: '#fff',
  },
  temperature: {
    fontSize: 25,
    color: '#fff',
  }
});
