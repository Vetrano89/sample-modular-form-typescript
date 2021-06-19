import React, { FC, ReactElement, createContext, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Main from './view/main';
import Themes from './themes';
import { mainSteps, MainStep, SubStep } from './config/step-config';
import { useContextValue } from './hooks/context-hooks';

export interface ContextData {
  currentStep: MainStep,
  currentSubStepIndex: number,
  incrementStep?: () => void,
  decrementStep?: () => void,
}

export const contextDefaultValue: ContextData = {
  currentStep: mainSteps[0],
  currentSubStepIndex: 0,
  // incrementStep: () => { },
  // decrementStep: () => { },
};

export const Context = createContext<ContextData>(contextDefaultValue);

const App: FC = (): ReactElement => {
  const context = useContextValue();
  console.log('Context');
  console.log(context);

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={Themes.default}>
        <div className="App">
          <Main />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
