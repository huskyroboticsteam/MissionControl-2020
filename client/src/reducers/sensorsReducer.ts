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
    voltages: 100,
    current: 20, 
    front_left: 5,
    front_right: 5,
    bottom_left: 5,
    bottom_right: 5,
    arm: 5,
    camera1: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
    camera2: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
    camera3: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
    camera4: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
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

//
