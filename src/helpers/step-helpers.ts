import { MainStep } from '../config/step-config';

export function isInitialStep(currentStep: MainStep, subStepIndex: number) {
    return currentStep.stepNumber === 0 && subStepIndex === 0;
}