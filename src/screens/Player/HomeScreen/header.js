import React from 'react';
import { DataStore, Hub } from '@aws-amplify/datastore';
import { View} from 'react-native';
import { useState, useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import { Sport } from '../../../models';

const Header = () => {

    const [sport, setSport] = useState('');
    const [sports, setSports] = useState([]);
    const [displaySports, setDisplaySports] = useState([]);

    useEffect(() => {
      
    const removeListener = Hub.listen('datastore', async ({ payload }) => {
      console.log(payload.event);
      if (payload.event === 'syncQueriesReady') {
        DataStore.query(Sport).then(setSports);
      }
    });
    
    DataStore.start();
    
    return () => removeListener();
      DataStore.query(Sport).then(setSports);
  }, []);

  useEffect(() => {
      if (!sports) {
          return;
      }
      const display = [];
      for (let i = 0; i < sports.length; i++) {
          display.push(sports[i].name);
      }
      setDisplaySports(display);
  }, [sports]);
    
  return (
    <View>
        <SelectDropdown
        data={displaySports}
        defaultButtonText={'Select a Sport'}
        onSelect={(selectedItem) => {
          setSport(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
       
    </View>
  );
};

export default Header;