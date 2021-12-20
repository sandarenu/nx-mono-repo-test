import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Button from '@mui/material/Button';
import { Provider } from 'react-redux';
import { ReactKeycloakProvider } from '@react-keycloak/web';

import { Header } from '@sansoft/header';
import { keycloakConfig } from '@sansoft/keycloak-integration';
import { configureStore } from './store/store';
import { LoaderPage} from '@sansoft/loader-page';

const store = configureStore();


export function App() {

  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloakConfig}
        LoadingComponent={<LoaderPage/>}
        initOptions={{
          onLoad: 'login-required',
          enableLogging: true,
          promiseType: 'native'
      }}
      >
        <Provider store={store}>
          <Header selectedPath="Admin" />
          <div>
            This is the Content <br />
           </div>      
        </Provider>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
