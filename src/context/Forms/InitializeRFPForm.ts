import { IForm, IInput, inputTypes, Columns, Variant } from "./FormInterfaces";
import { IRFP } from "../Models/RFP";
import { RFPStatus } from "../Models/Enums";

export const initializeRFPForm: IForm  = {
    formName: "initializeRFPForm",
    inputs: [
        {
            name: "rfpTitle",
            label: true,
            displayName: "RFP Title",
            value: "",
            type: inputTypes.text,
            columns: Columns.col12,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 1, max: 500},
                validationMessage: "",
            }
        },
        {
            name: "requestMessage",
            label: true,
            displayName: "RFP Invite Message",
            value: "",
            type: inputTypes.textarea,
            columns: Columns.col12,
            rows: 10,
            inputClass: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: true,
                length: {min: 1, max: 3000},
                validationMessage: "",
            }
        },
        {
            name: "proposalDueBy",
            label: true,
            displayName: "Proposal Date Due",
            value: "",
            type: inputTypes.date,
            columns: Columns.col6,
            inputClass: "",
            validation: {
                validationType: "date",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",
            }
        },
        {
            name: "cbcRequired",
            displayName: "Clause By Clause Required",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "RfpSpecUpload",
            displayName: "File Upload",
            label: false,
            value: "",
            disabled: true,
            type: inputTypes.button,
            submitType: "api",
            variant: Variant.secondary,
            wrapperClass: "hidden",
            inputClass: "",
            columns: Columns.col6,
        },
        {
            name: "RfpSubmit",
            displayName: "Submit",
            label: false,
            value: "",
            disabled: false,
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "activateDraftRFP",
            variant: Variant.primary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.col6,
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValuesHelper(form: IForm, name: string): any { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}

function getValues(this: IForm) {
    const formData = {
        rfpTitle: getValuesHelper(this,"rfpTitle"),
        requestMessage: getValuesHelper(this, "requestMessage"),
        proposalDueBy: getValuesHelper(this, "proposalDueBy"),
        cbcRequired: getValuesHelper(this, "cbcRequired"),
        status: RFPStatus.Active,
    }
    return formData;
}