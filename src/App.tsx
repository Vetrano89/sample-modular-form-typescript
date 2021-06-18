import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import './App.css';
import Main from './view/main';
import Themes from './themes';

function App() {
  return (
    <ThemeProvider theme={Themes.default}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
