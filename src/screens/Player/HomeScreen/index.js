import { View, FlatList, ActivityIndicator, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore } from 'aws-amplify';
import { Coach } from '../../../models';
import styles from './styles';
import { useSportContext } from '../../../context/SportContext';
import 'localstorage-polyfill';
import { useAuthContext } from '../../../context/AuthContext';

const HomeScreen = () => {

  const { sports } = useSportContext();
  const {dbUser} =useAuthContext();
  const [displaySports, setDisplaySports] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [state, setState] = useState([]);
  const statesNames = ['', 'Bucks', 'Chester', 'Delaware', 'Montgomery', 'Philadelphia'];
  const [selectedSportId, setSelectedSportId] = useState('');
  const [selectedState, setSelectedState] = useState('');

  //let selectedSportId = '';
  //let selectedState = '';

  localStorage.setItem('sportId', selectedSportId);
  localStorage.setItem('state', selectedState);

  const sportId = localStorage.getItem('sportId');
  const st = localStorage.getItem('state');

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
    console.log(sportId);
    console.log(st);
    if (!dbUser) {
      alert('You must create a profile before you may search for a coach.')
    } else {
    let results;
    if (sportId !== '' && st === '') {
      results = await DataStore.query(Coach, (c) => c.sportID.eq(sportId));
    } else if (st !== '' && sportId === '') {
      results = await DataStore.query(Coach, (c) => c.state.eq(st));
    } else if (st !== '' && sportId !== '') {
      results = await DataStore.query(Coach, (c) => c.and(c => [
        c.sportID.eq(sportId),
        c.state.eq(st)
      ]));
    } else if (sportId === '' && st === '') {
      results = await DataStore.query(Coach);
    }
    setCoaches(results)
  }};

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
        onSelect={(selectedSport) => {
          if (selectedSport === '' || selectedSport === 'SELECT A SPORT') {
            //selectedSportId = '';
            setSelectedSportId('')
          } else {
            for (let i = 0; i < sports.length; i++) {
              if (sports[i].name === selectedSport) {
                //selectedSportId = sports[i].id
                setSelectedSportId(sports[i].id)
              }
            }
          }
          //fetchCoaches();
        }}
        buttonTextAfterSelection={(selectedSport) => {
          return selectedSport;
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
          if (selectedItem === '' || selectedItem === 'SELECT A COUNTY') {
            //selectedState = '';
            setSelectedState('')
          }
          //selectedState = selectedItem;
          setSelectedState(selectedItem)

          //fetchCoaches();
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
      <Pressable
        style={styles.button} onPress={fetchCoaches}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </Pressable>
      <FlatList
        data={coaches}
        renderItem={({ item, index }) => <CoachComponent coach={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default HomeScreen;