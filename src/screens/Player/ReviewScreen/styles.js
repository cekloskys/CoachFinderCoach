import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: '#dce7fa',
    backgroundColor: '#dfe3eb',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  completeContainer: {
    width: '100%',
    paddingTop: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  sectionContent: {
    width: '100%',
    paddingLeft: 10,
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
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitledetail: {
    color: 'grey',
    fontSize: 16,
    marginLeft: 'auto',
  },
  subtitledetail2: {
    color: 'grey',
    fontSize: 14,
  },
  container: {
    marginHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgrey',
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#556a8a',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#556a8a',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default styles;