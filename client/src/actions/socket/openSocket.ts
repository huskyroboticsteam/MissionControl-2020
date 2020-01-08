import { OPEN_SOCKET } from './types';

export default () => (dispatch: Function) => {
  dispatch({
    type: OPEN_SOCKET
  });
};
