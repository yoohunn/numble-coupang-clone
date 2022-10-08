import cookies from 'js-cookie';

interface Token {
  access: string;
  refresh: string;
}

type T = keyof Token;

export class TokenStorage {
  get(type?: T) {
    return type
      ? cookies.get(type)
      : {
          access: cookies.get('access'),
          refresh: cookies.get('refresh'),
        };
  }

  set(token: Token) {
    cookies.set('access', token.access, { expires: 1 });
    cookies.set('refresh', token.refresh, { expires: 7 });
  }

  remove() {
    cookies.remove('access');
    cookies.remove('refresh');
  }
}
