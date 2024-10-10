import type { FC } from 'react';
import type { LayoutWrapperProps } from '@nxweb/react';
import { createEmotionCache, Head } from '@nxweb/react';

import { app } from '@config/app.js';

import { Provider } from 'react-redux';
import store from '@models/store';

import { CacheProvider } from '@emotion/react';


import '@styles/index.css';

const clientEmotionCache = createEmotionCache();


const App: FC<LayoutWrapperProps> = ({
  children = null, emotionCache = clientEmotionCache
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{app.title}</title>
        <meta content={`${app.name} — ${app.description}`} name="description" />
        <meta content={app.keywords.join(',')} name="keywords" />
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <Provider store={store}>
        {children}
      </Provider>
    </CacheProvider>
  );
};

App.displayName = 'App';

export { App };
