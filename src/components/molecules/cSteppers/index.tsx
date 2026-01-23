import { forwardRef, useImperativeHandle } from "react";
import { CSteppersProps, ISteppersRef } from "./types";
import { Step, StepLabel, Stepper } from "@mui/material";

const CSteppers = forwardRef(
  (
    {
      numberStep,
      currentStep,
      onStepChange,
      enableChangeStepByClick = false,
    }: CSteppersProps,
    ref: React.Ref<ISteppersRef>,
  ) => {
    const stepsList = Array.from({ length: numberStep });

    useImperativeHandle(ref, () => {
      return {
        handleBackStep: () => {
          if (currentStep > 0) {
            onStepChange(currentStep - 1);
          }
        },
        handleNextStep: () => {
          if (currentStep < numberStep - 1) {
            onStepChange(currentStep + 1);
          }
        },
      };
    });

    return (
      <Stepper activeStep={currentStep} sx={{ width: "100%" }}>
        {stepsList.map((_, idx) => {
          return (
            <Step
              key={idx}
              completed={idx < currentStep}
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
                    onStepChange(idx);
                  }
                }}
              />
            </Step>
          );
        })}
      </Stepper>
    );
  },
);

export default CSteppers;
