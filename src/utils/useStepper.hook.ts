import { useCallback, useMemo, useState } from "react";

export function useStepper<T extends readonly PropertyKey[]>(steps: T) {
  type Step = T[number];

  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  const stepIndexMap = useMemo(() => {
    return Object.fromEntries(
      steps.map((step, index) => [step, index]),
    ) as Record<Step, number>;
  }, [steps]);

  const stepIndex = stepIndexMap[currentStep];

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      const index = stepIndexMap[prev];
      return steps[index + 1] ?? prev;
    });
  }, [steps, stepIndexMap]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => {
      const index = stepIndexMap[prev];
      return steps[index - 1] ?? prev;
    });
  }, [steps, stepIndexMap]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < steps.length) {
        setCurrentStep(steps[index]);
      }
    },
    [steps],
  );

  return {
    currentStep,
    stepIndex,
    goNext,
    goBack,
    goToIndex,
  };
}
