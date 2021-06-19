import React, { FC, ReactElement, createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Main from './view/main';
import Themes from './themes';
import { DescriptionAndTitleSubSteps, SubSteps } from './utils/constants';

interface ContextData {
  currentStep: SubSteps
}

export const contextDefaultValue: ContextData = {
  currentStep: DescriptionAndTitleSubSteps.DESCRIPTION_AND_TITLE,
};

export const Context = createContext<ContextData | undefined>(undefined);

const App: FC = (): ReactElement => {
  const contextValue = useContextValue();

  return (
    <ThemeProvider theme={Themes.default}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
