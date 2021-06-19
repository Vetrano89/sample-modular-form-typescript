import { useState } from "react";
import { step } from '';

export function useContextValue(): ContextData {
    const [currentStep, setCurrentStep] = useState<Deal[]>([]);

    return {
        currentStep
    };
}