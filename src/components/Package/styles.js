import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      page: {
            flex: 1,
      },
      restaurantContainer: {
            width: '100%',
            marginVertical: 10,
      },
      title: {
            fontSize: 20,
            fontWeight: '500',
            alignItems: 'center',
      },
      subtitle: {
            fontSize: 18,
            color: 'grey',
      },
      row: {
            flexDirection: 'row',
            alignItems: 'center',
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
            fontSize: 18,
            fontWeight: 'bold'
      },
});
export default styles;