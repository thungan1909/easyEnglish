import { forwardRef, useImperativeHandle, useState } from "react";
import { CSteppersProps, ISteppersRef } from "./types";
import { Step, StepLabel, Stepper } from "@mui/material";

const CSteppers = forwardRef(
  (
    {
      numberStep,
      currentStep,
      changeCurrentStep,
      enableChangeStepByClick = false,
    }: CSteppersProps,
    ref: React.Ref<ISteppersRef>
  ) => {
    const stepsList = Array(numberStep).fill(null);
    const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});

    const handleNext = () => {
      if (currentStep === numberStep - 1) return;

      changeCurrentStep(currentStep + 1);
      completed[currentStep] = true;

      setCompleted((prevData) => ({
        ...prevData,
        [currentStep]: true,
      }));
    };

    const handleBack = () => {
      if (currentStep === 0) return;
      changeCurrentStep(currentStep - 1);

      setCompleted((prevData) => ({
        ...prevData,
        [currentStep]: false,
      }));
    };

    useImperativeHandle(ref, () => {
      return {
        handleBackStep: handleBack,
        handleNextStep: handleNext,
      };
    });

    return (
      <Stepper activeStep={currentStep} sx={{ width: "100%" }}>
        {stepsList.map((_, idx) => {
          const isCompleted = completed[idx] && currentStep > idx;

          return (
            <Step
              completed={isCompleted}
              index={idx}
              sx={{
                "&.MuiStep-root": {
                  padding: 0,
                },
              }}
            >
              <StepLabel
                sx={{
                  ".MuiStepLabel-iconContainer": {
                    padding: 0,
                  },
                }}
                onClick={() => {
                  if (enableChangeStepByClick) {
                    changeCurrentStep(idx);

                    const result: { [key: string]: boolean } = {};

                    for (let i = 0; i < idx; i++) {
                      result[i] = true;
                    }

                    setCompleted(result);
                  }
                }}
              />
            </Step>
          );
        })}
      </Stepper>
    );
  }
);

export default CSteppers;
