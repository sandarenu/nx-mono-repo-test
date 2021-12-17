import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Button from '@mui/material/Button';
import { Provider } from 'react-redux';

import { Header } from '@sansoft/header';

import { configureStore } from './store/store';

const store = configureStore();

export function App() {
  return (
    <>
      <Provider store={store}>
        <Header selectedPath='Admin' />
        <div>
          This is the Content <br/>
          <Button variant="contained">Hello World</Button>
        </div>
      </Provider>
    </>
  );
}

export default App;
