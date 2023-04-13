import { View, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore } from 'aws-amplify';
import { Coach } from '../../../models';
import styles from './styles';
import { useSportContext } from '../../../context/SportContext';

let selectedSport = '';
let selectedSportId = '';
let selectedState = '';

const HomeScreen = () => {

  const { sports } = useSportContext();
  const [displaySports, setDisplaySports] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [state,setState] = useState([]);
  const [finalCoach, setFinalCoach]= useState([]);
  const statesNames = [ 'Bucks', 'Chester', 'Deleware', 'Montgomery', 'Philadelphia'];
  
  useEffect(() => {
    if (!sports) {
      return;
    }
    const display = [];
    for (let i = 0; i < sports.length; i++) {
      display.push(sports[i].name);
    }
    display.sort();
    setDisplaySports(display);
  }, [sports]);

  const fetchCoaches = async () => {
    const results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSportId));
    setCoaches(results)
  };
/*const fetchFinalCoaches = async () => {
  const results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSportId));
  const states = await DataStore.query(Coach, (c) => c.state.eq(selectedState));
  console.log("r");
  console.log(results);
  console.log("s");
  console.log(states);
  setFinalCoach(
    results.map(result => ({
      ...result,
       State: states.find(s => s.state == result.state),
    })))
    setCoaches(finalCoach);
};
console.log("fc");
console.log(finalCoach);
*/
  if (sports.length === 0) {
    return (
        <ActivityIndicator size="large" color="#db4f40" style={{flex: 1}}/>
    )
  }

  return (
    <View style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultButtonText={'SELECT A SPORT'}
        onSelect={(selectedItem) => {
          selectedSport = selectedItem;
          for (let i = 0; i < sports.length; i++) {
            if (sports[i].name === selectedSport) {
              selectedSportId = sports[i].id
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
        defaultButtonText={'SELECT COUNTY'}
        onSelect={(selectedItem) => {
          selectedState = selectedItem;
          //fetchFinalCoaches();
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