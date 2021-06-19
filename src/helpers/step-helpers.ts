import { MainStep, TOTAL_STEPS, mainSteps } from '../config/step-config';

export function isInitialStep(currentStep: MainStep, subStepIndex: number) {
  return currentStep.stepNumber === 0 && subStepIndex === 0;
}

export function getStepProgress(currentStep: MainStep, subStepIndex: number) {
  const currentStepCompletedSubSteps = subStepIndex + 1;
  console.log(currentStepCompletedSubSteps);
  const totalCompletedSubSteps: number = mainSteps
    .filter((step) => step.stepNumber < currentStep.stepNumber)
    .reduce((acc, step) => {
      return acc = acc + step.subSteps.length
    }, 0) + currentStepCompletedSubSteps;

  console.log(totalCompletedSubSteps);
  console.log(TOTAL_STEPS);

  return totalCompletedSubSteps / TOTAL_STEPS * 100;
}