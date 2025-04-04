import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import MyLesson from "./lesson/MyLesson";
import MyChallenge from "./challenge/MyChallenge";

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
      <Tabs
        value={uploadValue}
        onChange={(_, newUploadValue: string) =>
          setUploadValue(newUploadValue as UploadTypeEnum)
        }
        centered
        sx={{
          "MuiButtonBase-root-MuiTab-root.Mui-selected": {
            color: "purple",
          },
        }}
      >
        <Tab label="Lesson" value={UploadTypeEnum.lesson} />
        <Tab label="Challenge" value={UploadTypeEnum.challenge} />
      </Tabs>
      {uploadValue === UploadTypeEnum.lesson ? <MyLesson /> : <MyChallenge />}
    </div>
  );
};
export default ManageMyUpload;
