import { useEffect, useRef } from 'react';

const CHANNEL_NAME = 'address';

interface IOptions {
  onMessage?: (message: any) => void;
}

export const useAddressPopup = (addressId?: number, options?: IOptions) => {
  const channel = useRef<BroadcastChannel>();

  useEffect(() => {
    channel.current = new BroadcastChannel(CHANNEL_NAME);

    const onmessage = options?.onMessage;
    if (onmessage) {
      channel.current.onmessage = (event) => onmessage(event.data);
    }
  }, []);

  const open = () => {
    window.open(
      `addressbook?id=${addressId}`,
      '',
      '_blank, width=510, height=650'
    );
  };

  const postMessage = (message: any) => channel.current?.postMessage(message);

  return {
    open,
    postMessage,
  };
};
