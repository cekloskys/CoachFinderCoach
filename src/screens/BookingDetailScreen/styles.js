import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
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
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    color:'grey',
    fontSize: 16,
    marginTop: 2,
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
  button: {
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }, 
  buttonText: {
    fontSize: 16,
    color: '#444',
  },
});

export default styles;