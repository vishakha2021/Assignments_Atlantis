import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './PlanBlockstyle';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';

const PlanBlock = ({
  planTitle,
  planValidity,
  showPlanData,
  planData,
  planDesc,
}) => {
  return (
    <>
      <View style={styles.planTitleAndButton}>
        <Text style={styles.planTitle}>{planTitle}</Text>

        <Button
          title="Select"
          type="outline"
          titleStyle={styles.buttonTitle}
          containerStyle={styles.buttonOutline}
        />
      </View>
      <View style={styles.planDetails}>
        <Text style={styles.planValidityAndData}>Validity: {planValidity}</Text>
        {showPlanData && (
          <Text style={[styles.planValidityAndData, styles.planData]}>
            Data: {planData}
          </Text>
        )}
      </View>
      <Text style={styles.planDesc}>{planDesc}</Text>
    </>
  );
};

PlanBlock.propTypes = {
  planTitle: PropTypes.string,
  planValidity: PropTypes.string,
  showPlanData: PropTypes.bool,
  planData: PropTypes.string,
  planDesc: PropTypes.string,
};

PlanBlock.defaultProps = {};

export default PlanBlock;
