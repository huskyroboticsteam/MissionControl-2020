import { OPEN_SOCKET } from './types';

export default () => dispatch => {
  dispatch({
    type: OPEN_SOCKET
  });
};
