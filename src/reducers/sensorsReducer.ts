import { UPDATE_SENSORS } from '../actions/sensors/types';

const initialState = {
  data: {
    timestamp: 0,
    temperature: 87,
    quality: 20,
    velocity: 55,
    x: 20,
    y: 30,
    z: 50,
    voltage: true,
    latitude: 47.6498,
    longitude: -122.3038,
    voltages: 100,
    current: 20,
    front_left: 5,
    front_right: 5,
    bottom_left: 5,
    bottom_right: 5,
    arm: 5,
    camera1: 'http://192.168.133.133:8080',
    camera2: 'http://192.168.133.133:8081',
    camera3: 'http://192.168.133.133:8082',
    camera4: 'https://image.shutterstock.com/image-vector/sample-speech-bubble-sign-banner-260nw-1475723558.jpg',
    x_s: 5,
    y_s: 5,
    x_tvoc: 5,
    y_tvoc: 5,
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
