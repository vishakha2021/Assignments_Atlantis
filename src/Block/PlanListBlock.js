import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from '../MainPage.style';
import PlanBlock from './PlanBlock';
import {Divider} from 'react-native-elements';
import {planMockData} from '../mockData/PlanMockData';
import PropTypes from 'prop-types';

const PlanListBlock = ({selectedIndex}) => {
  return (
    <View style={styles.tabView}>
      <FlatList
        data={planMockData[selectedIndex]}
        renderItem={({item, index}) => (
          <>
            <PlanBlock
              planTitle={item.amount}
              planValidity={item.validity}
              planDesc={item.desc}
              showPlanData={selectedIndex === 1 || selectedIndex === 3}
              planData={item.data}
            />
            <Divider width={1} color={'#979797'} />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

PlanListBlock.propTypes = {
  selectedIndex: PropTypes.number,
};

PlanListBlock.defaultProps = {};

export default PlanListBlock;
