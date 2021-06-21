import { MainStep, TOTAL_STEPS, mainSteps } from '../config/step-config';

export function isInitialStep(currentStep: MainStep, subStepIndex: number): boolean {
  return currentStep.stepNumber === 0 && subStepIndex === 0;
}

export function getStepProgress(currentStep: MainStep, subStepIndex: number): number {
  const currentStepCompletedSubSteps = subStepIndex + 1;
  const totalCompletedSubSteps: number = mainSteps
    .filter((step) => step.stepNumber < currentStep.stepNumber)
    .reduce((acc, step) => {
      return acc = acc + step.subSteps.length
    }, 0) + currentStepCompletedSubSteps;

  return totalCompletedSubSteps / TOTAL_STEPS * 100;
}