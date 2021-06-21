import { MainStep, TOTAL_STEPS, mainSteps } from '../config/step-config';

export function isInitialStep(currentStep: MainStep, subStepIndex: number): boolean {
  return currentStep.stepNumber === 0 && subStepIndex === 0;
}

export function totalCompletedSubSteps(currentStep: MainStep, subStepIndex: number): number {
  const currentStepCompletedSubSteps = subStepIndex + 1;
  return mainSteps
    .filter((step) => step.stepNumber < currentStep.stepNumber)
    .reduce((acc, step) => {
      return acc = acc + step.subSteps.length
    }, 0) + currentStepCompletedSubSteps;
}

export function isLastStep(currentStep: MainStep, subStepIndex: number): boolean {
  const completedSubSteps = totalCompletedSubSteps(currentStep, subStepIndex);
  return TOTAL_STEPS === completedSubSteps;
}

export function getStepProgress(currentStep: MainStep, subStepIndex: number): number {
  const completedSubSteps = totalCompletedSubSteps(currentStep, subStepIndex);

  return completedSubSteps / TOTAL_STEPS * 100;
}