import Image from 'next/image';

import type { TRocket } from '../../types/products.types';

interface IProps {
  type: TRocket;
  width?: number;
  height?: number;
}

const RocketBage = ({ type, width, height }: IProps) => {
  if (type === null) return null;

  const rocketURL = {
    fresh: '/rocket-fresh.png',
    ROCKET: '/rocket.png',
  };

  return (
    <Image
      src={rocketURL[type]}
      alt='rocket bage'
      width={width ?? 56}
      height={height ?? 14}
    />
  );
};

export default RocketBage;
