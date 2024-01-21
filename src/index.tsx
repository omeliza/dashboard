import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import 'index.css';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { setupStore } from 'redux/store';
import App from 'components/App';
import { theme } from 'theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>,
);
