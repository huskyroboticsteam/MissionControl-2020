import { CLOSE_SOCKET } from './types';

export default () => (dispatch : Function) => {
  dispatch({
    type: CLOSE_SOCKET
  });
};
