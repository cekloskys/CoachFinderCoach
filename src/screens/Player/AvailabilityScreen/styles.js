import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f5f4f2',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  completeContainer: {
    width: '100%',
    //height: 36,
    //backgroundColor: 'lightgrey',
    paddingTop: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  sectionContent: {
    width: '100%',
    //height: 30,
    //paddingTop: 3,
    paddingLeft: 10,
    //flexDirection: 'row',
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
    fontSize: 16,
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
  menu: {
    marginVertical: 10,
    fontSize: 16,
    color: 'grey',
  },
  button: {
    borderColor: 'black',
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default styles;