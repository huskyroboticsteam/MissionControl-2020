import { UPDATE_SENSORS } from '../actions/sensors/types';

const initialState = {
  data: {
    timestamp: 0,
    temperature: 87,
    quality: 20,
    velocity:55,
    x: 20,
    y: 30,
    z: 50,
    voltage: true, 
    latitude: 47.6498,
    longitude: -122.3038
  }
};

const sensorsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_SENSORS:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};

export default sensorsReducer;
