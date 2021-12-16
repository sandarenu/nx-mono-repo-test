import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Button from '@mui/material/Button';

import { Header } from '@sansoft/header';

export function App() {
  return (
    <>
      <Header />
      <div >
      <Button variant="contained">Hello World</Button>
      </div>
    </>
  );
}

export default App;
