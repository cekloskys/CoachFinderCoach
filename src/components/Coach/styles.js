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
    fontWeight: '500',
  },
  rating: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;