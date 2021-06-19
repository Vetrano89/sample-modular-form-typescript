import { useState } from "react";
import { ContextData } from '../App';
import { mainSteps } from '../config/step-config';

export function useContextValue(): ContextData {
  const [currentStep, setCurrentStep] = useState(mainSteps[0]);
  const [currentSubStepIndex, setCurrentSubStepIndex] = useState(0);

  const incrementStep = (): void => {
    const isLastSubStepOfCurrentStep = (currentStep.subSteps.length - 1) === currentSubStepIndex;

    if (isLastSubStepOfCurrentStep) {
      setCurrentStep(mainSteps[currentStep.stepNumber + 1]);
      setCurrentSubStepIndex(0);
    } else {
      setCurrentSubStepIndex(currentSubStepIndex + 1);
    }
  }

  const decrementStep = (): void => {
    const isFirstSubStepOfCurrentStep = currentSubStepIndex === 0;
    if (isFirstSubStepOfCurrentStep) {
      setCurrentStep(mainSteps[currentStep.stepNumber - 1]);
      setCurrentSubStepIndex(mainSteps[currentStep.stepNumber - 1].subSteps.length - 1);
    } else {
      setCurrentSubStepIndex(currentSubStepIndex - 1);
    }
  }

  return {
    currentStep,
    currentSubStepIndex,
    incrementStep,
    decrementStep
  };
}