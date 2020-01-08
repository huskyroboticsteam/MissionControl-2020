import { UPDATE_NOMINAL } from '../actions/nominal/types';

const initialState = {
  data: {
    timestamp: true,
  }
};

const nominalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NOMINAL:
      return {
        ...initialState,
        data: action.payload
      };
    default:
      return state;
  }
};

export default nominalReducer;
