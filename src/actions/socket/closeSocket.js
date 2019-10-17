import { CLOSE_SOCKET } from './types';

export default () => dispatch => {
  dispatch({
    type: CLOSE_SOCKET
  });
};
