import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: '#dce7fa',
    backgroundColor: '#dfe3eb',
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 5/3,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
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
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  details: {
    color:'white',
    fontSize: 14,
    marginTop: 2,
  },
  subtitledetail: {
    color: 'white',
    fontSize: 14,
    marginLeft: 'auto',
  },
  subtitledetail2: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    borderColor: 'black',
    padding: 15,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  bookbutton: {
    borderColor: '#556a8a',
    marginToop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#556a8a',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default styles;