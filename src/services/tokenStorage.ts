import cookies from 'js-cookie';

export interface ITokenStorage {
  get: (
    type?: 'access' | 'refresh'
  ) =>
    | string
    | undefined
    | { access: string | undefined; refresh: string | undefined };
  set: (token: IToken) => void;
}

interface IToken {
  access: string;
  refresh: string;
}

export const tokenStorage: ITokenStorage = {
  get: (type?: 'access' | 'refresh') => {
    const token = {
      access: cookies.get('refreshToken'),
      refresh: cookies.get('refreshToken'),
    };

    return type ? token[type] : token;
  },

  set: (token: IToken) => {
    cookies.set('accessToken', token.access, { expires: 1 });
    cookies.set('refreshToken', token.refresh, { expires: 7 });
  },
};
