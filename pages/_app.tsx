import type { AppProps } from 'next/app';
import { useState } from 'react';
import Script from 'next/script';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Script
          src={`https://kit.fontawesome.com/${process.env.NEXT_PUBLIC_KIT_NAME}.js`}
          crossOrigin='anonymous'
        />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
