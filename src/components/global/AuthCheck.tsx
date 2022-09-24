import { useGetUser } from '../../hooks/useUser';
import AuthFallback from './AuthFallback';

interface IProps {
  children: JSX.Element;
  fallback?: JSX.Element;
}

const AuthCheck = (props: IProps) => {
  const user = useGetUser();

  return user
    ? props.children
    : props.fallback || <AuthFallback message='로그인 페이지로' />;
};

export default AuthCheck;
