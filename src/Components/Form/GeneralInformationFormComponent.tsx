import { Dispatch, FC, SetStateAction } from "react";
import { H2Component } from "../HelperComponent.tsx";
import { IGeneralInfo } from "../../interfaces.ts";
import {LabelInputComponent} from "../LabelInputComponent.tsx";

const GeneralInformationFormComponent: FC<{
    generalInfo: IGeneralInfo;
    setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo>>;
}> = ({ generalInfo, setGeneralInfo }) => {
    const handleInputChange = (field: keyof IGeneralInfo, value: string) => {
        setGeneralInfo((prevInfo) => ({ ...prevInfo, [field]: value }));
    };

    return (
        <>
            <H2Component title="General Information" />
            <div className="flex flex-row w-full gap-8 flex-wrap sm:flex-nowrap ">

                <LabelInputComponent
                    title="First Name"
                    value={generalInfo.firstName}
                    handleInput={(e) => handleInputChange("firstName", e.target.value)}
                />
                <LabelInputComponent
                    title="Last Name"
                    value={generalInfo.lastName}
                    handleInput={(e) => handleInputChange("lastName", e.target.value)}
                />
            </div>
            <div className="flex flex-row w-full gap-8 flex-wrap sm:flex-nowrap ">
                <LabelInputComponent
                    title="Email Address"
                    value={generalInfo.email}
                    type={"email"}
                    handleInput={(e) => handleInputChange("email", e.target.value)}
                />
                <LabelInputComponent
                    title="Phone Number"
                    value={generalInfo.phoneNumber}
                    handleInput={(e) => handleInputChange("phoneNumber", e.target.value)}
                />
            </div>
            <LabelInputComponent
                title="Personal Statement"
                type={"textarea"}
                value={generalInfo.statement}
                handleInput={(e) => handleInputChange("statement", e.target.value)}
            />
        </>
    );
};

export default GeneralInformationFormComponent;
