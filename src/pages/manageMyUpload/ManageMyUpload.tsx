import { useState } from "react";
import MyLesson from "./MyLesson";
import MyChallenge from "./MyChallenge";
import CTab from "../../components/atoms/CTab/CTab";

export enum UploadTypeEnum {
  challenge = "CHALLENGE",
  lesson = "LESSON",
}

const ManageMyUpload = () => {
  const [uploadValue, setUploadValue] = useState<UploadTypeEnum>(
    UploadTypeEnum.lesson
  );

  return (
    <div className="flex flex-col gap-4">
      <CTab
        value={uploadValue}
        onChange={(_, newUploadValue: string) =>
          setUploadValue(newUploadValue as UploadTypeEnum)
        }
        tabOptions={[
          {
            label: "Lesson",
            value: UploadTypeEnum.lesson,
          },
          {
            label: "Challenge",
            value: UploadTypeEnum.challenge,
          },
        ]}
      />
      {uploadValue === UploadTypeEnum.lesson ? <MyLesson /> : <MyChallenge />}
    </div>
  );
};
export default ManageMyUpload;
