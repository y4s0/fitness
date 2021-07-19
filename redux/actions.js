export const GET_SONGS = 'GET_STEPS';

import Fitness from '@ovalmoney/react-native-fitness';

const permission = [
    {kind: Fitness.PermissionKinds.Steps, 
      access: Fitness.PermissionAccesses.Read
    }
  ]

export const getSteps = () => {
    try {
        return async dispatch => {
            Fitness.requestPermissions(permission).then((authorized) => {
                if(authorized) {
                    const stepsFilter = {
                        startDate: '2021-07-01',
                        endDate: '2021-07-12',
                        interval: 'days'
                      }
                    Fitness.getSteps(stepsFilter).then((result) => {
                        if(result.length > 0) {
                            console.log("Steps result is", result);
                            dispatch({
                                type: GET_SONGS,
                                payload: result
                            });
                        } else {
                            console.log('Unable to fetch');
                        }
                    })
                }
            })
        }
        
    } catch (error) {
        
    }
}