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
    camera1: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
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
