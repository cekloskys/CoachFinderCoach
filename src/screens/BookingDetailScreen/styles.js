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
    //backgroundColor: '#4287f5',
    backgroundColor: '#db4f40',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }, 
  acceptButton: {
    //backgroundColor: '#4287f5',
    backgroundColor: '#366e1a',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }, 
  completeButton: {
    //backgroundColor: '#4287f5',
    backgroundColor: '#556a8a',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }, 
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
});

export default styles;