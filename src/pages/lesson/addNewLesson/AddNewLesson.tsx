import React, { useState } from "react";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CTextArea from "../../../components/atoms/CTextArea/CTextArea";
import CButton from "../../../components/atoms/CButton/CButton";
import CUploadFile from "../../../components/atoms/CUploadFile/CUploadFile";

const AddNewLesson: React.FC = () => {
  return (
    <div className="relative top-24 left-24 md:w-[720px]">
      <form className="flex flex-col space-y-8">
        <div className="w-full">
          <CTextField label="Title" className="w-full" />
        </div>
        <CUploadFile />
        <div>
          <CTextArea
            maxRows={50}
            minRows={10}
            placeholder="Content"
            className="w-full"
          />
        </div>
        <CButton>Save</CButton>
      </form>
    </div>
  );
};

export default AddNewLesson;
