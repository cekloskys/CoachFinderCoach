import { View, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore } from 'aws-amplify';
import { Coach } from '../../../models';
import styles from './styles';
import { useSportContext } from '../../../context/SportContext';

const HomeScreen = () => {

  const { sports } = useSportContext();
  const [displaySports, setDisplaySports] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [state, setState] = useState([]);
  //const [finalCoach, setFinalCoach] = useState([]);
  const statesNames = ['', 'Bucks', 'Chester', 'Deleware', 'Montgomery', 'Philadelphia'];

  let selectedSport = '';
  let selectedSportId = '';
  let selectedState = '';

  useEffect(() => {
    if (!sports) {
      return;
    }
    const display = [];
    display.push('');
    for (let i = 0; i < sports.length; i++) {
      display.push(sports[i].name);
    }
    display.sort();
    setDisplaySports(display);
  }, [sports]);

  const fetchCoaches = async () => {
    //console.log(selectedSportId);
    //console.log(selectedState);
    let results;
    if (selectedSportId !== '' && selectedState === '') {
      results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSportId));
    } else if (selectedState !== '' && selectedSportId === '') {
      results = await DataStore.query(Coach, (c) => c.state.eq(selectedState));
    } else if (selectedState !== '' && selectedSportId !== '') {
      results = await DataStore.query(Coach, (c) => c.and(c => [
        c.sportID.eq(selectedSportId),
        c.state.eq(selectedState)
      ]));
    }
    setCoaches(results)
  };

  if (sports.length === 0) {
    return (
      <ActivityIndicator size="large" color="#db4f40" style={{ flex: 1 }} />
    )
  }

  return (
    <View style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultButtonText={'SELECT A SPORT'}
        onSelect={(selectedItem) => {
          if (selectedItem === '' || selectedItem === 'SELECT A SPORT') {
            selectedSportId = '';
          } else {
            selectedSport = selectedItem;
            for (let i = 0; i < sports.length; i++) {
              if (sports[i].name === selectedSport) {
                selectedSportId = sports[i].id
              }
            }
          }
          fetchCoaches();
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
      <SelectDropdown
        data={statesNames}
        defaultValue={state}
        defaultButtonText={'SELECT A COUNTY'}
        onSelect={(selectedItem) => {
          if (selectedItem === 'SELECT A COUNTY') {
            selectedState = '';
          }
          selectedState = selectedItem;
          fetchCoaches();
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      <FlatList
        data={coaches}
        renderItem={({ item, index }) => <CoachComponent coach={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default HomeScreen;