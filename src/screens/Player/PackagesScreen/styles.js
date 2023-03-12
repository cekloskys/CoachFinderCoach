import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
  },
  completeContainer: {
    width: '100%',
    height: 36,
    backgroundColor: 'lightgrey',
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  sectionContent: {
    width: '100%',
    height: 36,
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  outer: {
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
    width: '100%'
  },
  container: {
    margin: 10,
  },
  sectionContent: {
    width: '100%',
    height: 36,
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
});
export default styles;