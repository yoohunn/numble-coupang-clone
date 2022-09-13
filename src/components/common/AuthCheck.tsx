import { useGetUser } from '../../hooks/useUser';
import { CartFallback } from '../cart';

interface IProps {
  children: JSX.Element;
  fallback?: JSX.Element;
}

const AuthCheck = (props: IProps) => {
  const user = useGetUser();

  return user
    ? props.children
    : props.fallback || <CartFallback isUser={false} />;
};

export default AuthCheck;
