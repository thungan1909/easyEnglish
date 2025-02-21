export interface ISteppersRef {
  handleBackStep: () => void;
  handleNextStep: () => void;
}

export type CSteppersProps = {
  numberStep: number;
  width?: string;
  currentStep: number;
  changeCurrentStep: (step: number) => void;
  children?: React.ReactNode;
  enableChangeStepByClick?: boolean;
};
