import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Card} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {getSteps} from '../redux/actions'
import Fitness from '@ovalmoney/react-native-fitness';

const FitnessDataView = () => {
      
  const {steps} = useSelector(state => state.stepReducer);
  const dispatch = useDispatch();
  const fetSteps = () => dispatch(getSteps())
  
  useEffect(() => {
    fetSteps()
  }, [])

  return (
    <View style={{flex:1, paddingHorizontal: 20 }}>
      <View style={{flex:1}}>
      <FlatList
          data={steps}
          renderItem={({item}) => {
            console.log("Item", item);
              return (
                <View style={{marginTop:10}}>
                  <View style={{marginTop:10}}>
                    
                    <Text>{"Start Date: " + item["startDate"]}</Text>
                    <Text>{"End Date: " + item["endDate"]}</Text>
                    <Text>{"Steps :" + item["quantity"].toString()}</Text>
                  </View>
                </View>
              );
          }}
          >
          </FlatList>

      </View>
    </View>
  );
};


export default FitnessDataView;
