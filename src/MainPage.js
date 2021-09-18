import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './MainPage.style';
import {Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PlanListBlock from './Block/PlanListBlock';

const MainPage = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.mainTitle}>
          <Text style={styles.title}>Browse Plans</Text>
          <TouchableOpacity style={styles.crossBack}>
            <Text style={styles.crossIcon}>x</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>for Airtel Kolkata</Text>
        <Input
          containerStyle={styles.input}
          placeholder="Search Plan Amount, Talktime"
          rightIcon={{type: 'font-awesome', name: 'search'}}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#F1800D', height: 3},
        }}>
        <Tab.Screen
          name="Best Offers for You"
          children={() => <PlanListBlock selectedIndex={0} />}
        />
        <Tab.Screen
          name="Popular"
          children={() => <PlanListBlock selectedIndex={1} />}
        />
        <Tab.Screen
          name="Special Recharge"
          children={() => <PlanListBlock selectedIndex={2} />}
        />
        <Tab.Screen
          name="Top Up"
          children={() => <PlanListBlock selectedIndex={3} />}
        />
      </Tab.Navigator>
    </>
  );
};
MainPage.propTypes = {
  planTitle: PropTypes.string,
  planValidity: PropTypes.string,
  showPlanData: PropTypes.bool,
  planData: PropTypes.string,
  planDesc: PropTypes.string,
};

MainPage.defaultProps = {};

export default MainPage;
