import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subtitle: {
    color: 'grey',
  },
  subtitledetail: {
    //marginLeft: 'auto',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgrey',
    width: 30,
    height: 30,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default styles;