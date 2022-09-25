import { useEffect, useState } from 'react';

export function useSubscriber(name: string, onmessage: (message: any) => void) {
  useEffect(() => {
    const receiveChannel = new BroadcastChannel(name);
    receiveChannel.onmessage = (event) => onmessage(event.data);
  }, []);
}

export function useBroadcaster(name: string) {
  const [channel, setChannel] = useState<BroadcastChannel>();

  useEffect(() => {
    setChannel(new BroadcastChannel(name));
  }, []);

  const postMessage = (message: any) => channel?.postMessage(message);

  return { postMessage };
}
