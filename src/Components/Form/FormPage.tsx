import {Dispatch, FC, SetStateAction} from "react";
import EducationFormComponent from "./EducationFormComponent.tsx";
import GeneralInformationFormComponent from "./GeneralInformationFormComponent.tsx";
import WorkHistoryFormComponent from "./WorkHistoryFormComponent.tsx";
import {IEducation, IGeneralInfo, IWorkHistory} from "../../interfaces.ts";
import {H1Component} from "../HelperComponent.tsx";

const FormPage: FC<{
    generalInfo: IGeneralInfo;
    setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo>>
    educationData: IEducation[];
    setEducationData: Dispatch<SetStateAction<IEducation[]>>
    workHistories: IWorkHistory[];
    setWorkHistory: Dispatch<SetStateAction<IWorkHistory[]>>
}> = ({generalInfo, setGeneralInfo, educationData,  setEducationData, workHistories, setWorkHistory}) => {
  return (
      <>
          <H1Component title={"Create your CV Application"} />
          <div>
              <form className="grid gap-4">
                  <GeneralInformationFormComponent
                      generalInfo={generalInfo}
                      setGeneralInfo={setGeneralInfo}
                  />
                  <EducationFormComponent
                      educationData={educationData}
                      setEducationData={setEducationData}
                  />
                  <WorkHistoryFormComponent
                      workHistory={workHistories}
                      setWorkHistory={setWorkHistory}
                  />
              </form>
          </div>
      </>
  );
};
export default FormPage;
