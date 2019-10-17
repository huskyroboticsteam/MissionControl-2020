export const IS_PROD = process.env.NODE_ENV === 'production';

export const SERVER_URL = IS_PROD ? 'http://localhost:8000' : 'http://localhost:8000';

export const SOCKET_URL = IS_PROD ? 'ws://localhost:8000' : 'ws://localhost:8000';
