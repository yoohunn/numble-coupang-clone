import type { Dispatch, SetStateAction } from 'react';

import type { IAddress } from '../../types';
import { useBroadcaster } from '../useBroadcast';

export function usePickedIdCommands(
  setPickedId: Dispatch<SetStateAction<number>>
) {
  const { postMessage } = useBroadcaster('address');

  const changePicked = (id: number, address: IAddress) => {
    setPickedId(id);
    postMessage(address);
    window.close();
  };

  return { changePicked };
}
