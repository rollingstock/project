import { IForm, IInput, inputTypes, Columns, Variant, Components } from "./FormInterfaces";
import { ISupplierSearch } from "../Models/SupplierSearch";

export const supplierSearchForm: IForm  = {
    formName: "supplierSearchForm",
    inputs: [
        {
            name: "component",
            displayName: "Component",
            label: false,
            type: inputTypes.dropdown,
            inputClass: "",
            wrapperClass: "mb-3",
            columns: Columns.none,
            value: "",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "component", displayName: "",                           value: " "},
                {name: "component", displayName: "Doorways",                   value: Components.doorways},
                {name: "component", displayName: "Floors",                     value: Components.floors},
                {name: "component", displayName: "Floor Panels",               value: Components.floorPanels},
                {name: "component", displayName: "Handrails and Stanchions",   value: Components.handrailsAndStanchions},
                {name: "component", displayName: "Lighting",                   value: Components.lighting},
                {name: "component", displayName: "Public Information Systems", value: Components.publicInformationSystems},
                {name: "component", displayName: "Restrooms",                  value: Components.restrooms},
                {name: "component", displayName: "Sleeping Compartments",      value: Components.sleepingCompartments},
            ]
        },
        {
            name: "all",
            displayName: "All",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "buyAmerica",
            displayName: "Buy America",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "byAmerica",
            displayName: "By America",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "womanOwned",
            displayName: "Woman Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "minorityOwned",
            displayName: "Minority Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "veteranOwned",
            displayName: "Veteran Owned",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "greenCertified",
            displayName: "Green Certified",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "establishedProduct",
            displayName: "Established Product",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "isoCertified",
            displayName: "ISO Certified",
            type: inputTypes.checkbox,
            label: false,
            inline: false,
            inputClass: "",
            labelClass: "",
            columns: Columns.col12,
            value: false,
        },
        {
            name: "yearsInOperation",
            displayName: "Years in Operation",
            label: false,
            type: inputTypes.dropdown,
            inputClass: "hidden",
            columns: Columns.none,
            value: "any",
            validation: {
                validationType: "string",
                valid: null,
                required: true,
                lengthRequired: false,
                validationMessage: "",

            },
            choices: [
                {name: "yearsInOperation", displayName: "",            value: " "},
                {name: "yearsInOperation", displayName: "Any",         value: "Any"},
                {name: "yearsInOperation", displayName: "0-5 Years",   value: "0-5"},
                {name: "yearsInOperation", displayName: "5-10 Years",  value: "5-10"},
                {name: "yearsInOperation", displayName: "10-15 Years", value: "10-15"},
                {name: "yearsInOperation", displayName: "20+ Years",   value: "20+"},
            ]
        },
        {
            name: "supplierSearchSubmit",
            displayName: "Search",
            label: false,
            value: "",
            disabled: false,
            action: "handleSubmit",
            type: inputTypes.button,
            submitType: "supplierSearch",
            variant: Variant.primary,
            wrapperClass: "",
            inputClass: "",
            columns: Columns.none,
        },
    ],
    getValues: getValues,
    getValuesHelper: getValuesHelper,
}

function getValuesHelper(form: IForm, name: string) { 
    const input: any = form.inputs.find((input: IInput) => input.name === name);
    return input.value;
}

function getValues(this: IForm) {
    const all =  { component: getValuesHelper(this,"all")};

    const searchCriteria: ISupplierSearch | {component: string} = {
        component:          getValuesHelper(this,"component"),
        buyAmerica:         getValuesHelper(this, "buyAmerica"),
        byAmerica:          getValuesHelper(this, "byAmerica"),
        womanOwned:         getValuesHelper(this, "womanOwned"),
        minorityOwned:      getValuesHelper(this, "minorityOwned"),
        veteranOwned:       getValuesHelper(this, "veteranOwned"),
        greenCertified:     getValuesHelper(this, "greenCertified"),
        isoCertified:       getValuesHelper(this, "isoCertified"),
        yearsInOperation:   "5-10",//getValuesHelper(this, "yearsInOperation"),
        establishedProduct: getValuesHelper(this, "establishedProduct"),
    }

    return {...all,...searchCriteria};

}