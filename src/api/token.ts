import cookies from 'js-cookie';

type Token = {
  access: string;
  refresh: string;
};

export const getRefreshToken = () => cookies.get('refreshToken');

export const getAccessToken = () => cookies.get('accessToken');

export const setToken = (token: Token) => {
  cookies.set('accessToken', token.access, { expires: 1 });
  cookies.set('refreshToken', token.refresh, { expires: 7 });
};
